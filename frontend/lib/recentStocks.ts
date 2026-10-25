export const RECENT_STOCKS_KEY = "larp-stocks-recent-stocks";
export const RECENT_STOCKS_EVENT = "larp-stocks-recent-stocks-changed";
const MAX_RECENT_STOCKS = 8;

export function readRecentStocks(): string[] {
  const saved: unknown = JSON.parse(localStorage.getItem(RECENT_STOCKS_KEY) ?? "[]");
  return Array.isArray(saved)
    ? saved.filter((symbol): symbol is string => typeof symbol === "string").slice(0, MAX_RECENT_STOCKS)
    : [];
}

export function recordOpenedStock(symbol: string): void {
  const next = [
    symbol,
    ...readRecentStocks().filter((recentSymbol) => recentSymbol.toLowerCase() !== symbol.toLowerCase()),
  ].slice(0, MAX_RECENT_STOCKS);
  localStorage.setItem(RECENT_STOCKS_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(RECENT_STOCKS_EVENT));
}
