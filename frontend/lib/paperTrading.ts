export const PAPER_ACCOUNT_KEY_PREFIX = "larp-stocks-paper-account:";
export const STARTING_BALANCE = 10_000;

export type TradeSide = "BUY" | "SELL";
export type PaperTrade = {
  id: string;
  side: TradeSide;
  symbol: string;
  shares: number;
  price: number;
  timestamp: number;
};
export type PaperAccount = {
  cash: number;
  holdings: Record<string, number>;
  trades: PaperTrade[];
};
type StoredPaperAccount = {
  cash: number;
  holdings?: Record<string, number>;
  shares?: number;
  trades: Array<Omit<PaperTrade, "symbol"> & { symbol?: string }>;
};

export function emptyPaperAccount(): PaperAccount {
  return { cash: STARTING_BALANCE, holdings: {}, trades: [] };
}

function isHoldings(value: unknown): value is Record<string, number> {
  return typeof value === "object" &&
    value !== null &&
    Object.values(value).every(
      (shares) => typeof shares === "number" && Number.isFinite(shares) && shares >= 0,
    );
}

function isPaperAccount(value: unknown): value is StoredPaperAccount {
  if (
    typeof value !== "object" ||
    value === null ||
    !("cash" in value) ||
    typeof value.cash !== "number" ||
    !Number.isFinite(value.cash) ||
    value.cash < 0 ||
    !("trades" in value) ||
    !Array.isArray(value.trades)
  ) {
    return false;
  }

  const holdingsValid = "holdings" in value && isHoldings(value.holdings);
  const legacySharesValid = "shares" in value &&
    typeof value.shares === "number" &&
    Number.isFinite(value.shares) &&
    value.shares >= 0;
  const tradesValid = value.trades.every((trade: unknown) =>
    typeof trade === "object" &&
    trade !== null &&
    "id" in trade &&
    typeof trade.id === "string" &&
    "side" in trade &&
    (trade.side === "BUY" || trade.side === "SELL") &&
    "shares" in trade &&
    typeof trade.shares === "number" &&
    Number.isFinite(trade.shares) &&
    trade.shares > 0 &&
    "price" in trade &&
    typeof trade.price === "number" &&
    Number.isFinite(trade.price) &&
    trade.price > 0 &&
    "timestamp" in trade &&
    typeof trade.timestamp === "number" &&
    Number.isFinite(trade.timestamp),
  );

  return (holdingsValid || legacySharesValid) && tradesValid;
}

export function loadPaperAccount(email: string): PaperAccount {
  const value: unknown = JSON.parse(
    localStorage.getItem(`${PAPER_ACCOUNT_KEY_PREFIX}${email.toLowerCase()}`) ?? "null",
  );
  if (value === null) return emptyPaperAccount();
  if (!isPaperAccount(value)) throw new Error("Saved paper account data is invalid.");

  const holdings = "holdings" in value && isHoldings(value.holdings)
    ? value.holdings
    : {};
  if (!("holdings" in value) && "shares" in value && typeof value.shares === "number") {
    holdings.Lvidia = value.shares;
  }

  return {
    cash: value.cash,
    holdings,
    trades: value.trades.map((trade) => ({
      ...trade,
      symbol: "symbol" in trade && typeof trade.symbol === "string" ? trade.symbol : "Lvidia",
    })),
  };
}

export function savePaperAccount(email: string, account: PaperAccount): void {
  localStorage.setItem(
    `${PAPER_ACCOUNT_KEY_PREFIX}${email.toLowerCase()}`,
    JSON.stringify(account),
  );
}

export function applyPaperTrade(
  account: PaperAccount,
  symbol: string,
  side: TradeSide,
  shares: number,
  price: number,
): PaperAccount {
  if (!Number.isFinite(shares) || shares <= 0) {
    throw new Error("Enter a share amount greater than zero.");
  }
  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("The market price is unavailable.");
  }

  const total = Math.round(shares * price * 100) / 100;
  const ownedShares = account.holdings[symbol] ?? 0;
  if (side === "BUY" && total > account.cash) {
    throw new Error("Not enough simulated cash for this order.");
  }
  if (side === "SELL" && shares > ownedShares) {
    throw new Error(`You don't own enough ${symbol} shares to sell.`);
  }

  const nextShares = Math.round((ownedShares + (side === "BUY" ? shares : -shares)) * 10000) / 10000;
  const holdings = { ...account.holdings };
  if (nextShares === 0) delete holdings[symbol];
  else holdings[symbol] = nextShares;

  return {
    cash: Math.round((account.cash + (side === "SELL" ? total : -total)) * 100) / 100,
    holdings,
    trades: [
      { id: `${Date.now()}-${side}`, side, symbol, shares, price, timestamp: Date.now() },
      ...account.trades,
    ].slice(0, 50),
  };
}
