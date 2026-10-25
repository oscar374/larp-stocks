"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import {
  applyPaperTrade,
  loadPaperAccount,
  PaperAccount,
  savePaperAccount,
  STARTING_BALANCE,
  TradeSide,
} from "@/lib/paperTrading";

const DEMO_USER_KEY = "larp-stocks-demo-user";
const STOCK_API = "http://localhost:8000";

type MarketQuote = { name: string; price: number; trend: string };

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState<PaperAccount | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [sharesToTrade, setSharesToTrade] = useState("1");
  const [tradeMessage, setTradeMessage] = useState("");
  const [marketError, setMarketError] = useState("");
  const [accountError, setAccountError] = useState("");
  const [marketQuotes, setMarketQuotes] = useState<MarketQuote[]>([]);

  const refreshPrice = useCallback(async (signal?: AbortSignal) => {
    try {
      const params = new URLSearchParams({
        symbol: "Lvidia",
        howMany: "1",
        ticksInCandle: "1",
      });
      const response = await fetch(`${STOCK_API}/getCandles?${params}`, { signal });
      if (!response.ok) {
        throw new Error(`Market feed returned ${response.status}.`);
      }

      const candles: number[][] = await response.json();
      if (!Array.isArray(candles) || !candles.length || !Number.isFinite(candles.at(-1)?.[1])) {
        throw new Error("The Lvidia market feed has no price data yet.");
      }

      setPrice(candles[candles.length - 1][1]);
      setMarketError("");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMarketError(error instanceof Error ? error.message : "Unable to load market price.");
    }
  }, []);

  const refreshMarket = useCallback(async (signal?: AbortSignal) => {
    try {
      const response = await fetch(`${STOCK_API}/market`, { signal });
      if (!response.ok) throw new Error(`Market list returned ${response.status}.`);
      const quotes: MarketQuote[] = await response.json();
      if (!Array.isArray(quotes)) throw new Error("Market list response was invalid.");
      setMarketQuotes(quotes.filter((quote) => typeof quote.name === "string" && Number.isFinite(quote.price)));
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMarketError(error instanceof Error ? error.message : "Unable to load the market list.");
    }
  }, []);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      const signedInEmail = localStorage.getItem(DEMO_USER_KEY);
      if (!signedInEmail) {
        router.replace("/");
        return;
      }
      setEmail(signedInEmail);

      try {
        setAccount(loadPaperAccount(signedInEmail));
      } catch (error) {
        setAccountError(error instanceof Error ? error.message : "Unable to load your paper account.");
      }
    });

    const controller = new AbortController();
    queueMicrotask(() => {
      if (active) void refreshPrice(controller.signal);
      if (active) void refreshMarket(controller.signal);
    });
    const interval = window.setInterval(() => void refreshPrice(), 3000);
    const marketInterval = window.setInterval(() => void refreshMarket(), 5000);
    return () => {
      active = false;
      controller.abort();
      window.clearInterval(interval);
      window.clearInterval(marketInterval);
    };
  }, [refreshMarket, refreshPrice, router]);

  const lvidiaShares = account?.holdings.Lvidia ?? 0;
  const positionValue = price !== null ? lvidiaShares * price : 0;
  const otherPositions = account
    ? Object.entries(account.holdings).filter(([symbol]) => symbol !== "Lvidia")
    : [];
  const allPositionValue = otherPositions.reduce((total, [symbol, shares]) => {
    const currentPrice = marketQuotes.find((quote) => quote.name === symbol)?.price ?? 0;
    return total + shares * currentPrice;
  }, 0);
  const portfolioValue = (account?.cash ?? 0) + positionValue + allPositionValue;
  const tradeAmount = Number(sharesToTrade) * (price ?? 0);
  const dayChange = price === null ? 0 : price - 100;
  const dayChangePercent = price === null ? 0 : (dayChange / 100) * 100;

  const tradeSummary = useMemo(
    () => account?.trades.slice(0, 4) ?? [],
    [account],
  );
  const sortedMarketQuotes = useMemo(
    () => [...marketQuotes].sort((first, second) => second.price - first.price),
    [marketQuotes],
  );

  function executeTrade(side: TradeSide) {
    if (!account || !email || price === null) return;
    const shares = Number(sharesToTrade);
    try {
      const updated = applyPaperTrade(account, "Lvidia", side, Number(sharesToTrade), price);
      savePaperAccount(email, updated);
      setAccount(updated);
      setTradeMessage(`${side === "BUY" ? "Bought" : "Sold"} ${shares} Lvidia share${shares === 1 ? "" : "s"} at ${money(price)}.`);
    } catch (error) {
      setTradeMessage(error instanceof Error ? error.message : "Order could not be saved.");
    }
  }

  if (!account && !accountError) {
    return <main className="loading-screen">Preparing your paper trading desk…</main>;
  }

  return (
    <div className="siteContainer app-shell">
      <Sidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <h1>Your trading desk</h1>
            <p>Welcome back, {email.split("@")[0] || "trader"}.</p>
          </div>
        </header>

        {accountError && <div className="notice notice-error" role="alert">{accountError}</div>}
        {marketError && <div className="notice notice-error" role="alert">{marketError} Start the backend with <code>npm start</code> in the backend folder.</div>}

        {account && (
          <>
            <section className="overview-grid" aria-label="Account overview">
              <article className="overview-card balance-card">
                <div className="card-label">PAPER PORTFOLIO VALUE <span className="card-icon">◈</span></div>
                <strong>{money(portfolioValue)}</strong>
                <div className="card-foot"><span className="positive-pill">↗ {money(portfolioValue - STARTING_BALANCE)}</span><span>since you started</span></div>
              </article>
              <article className="overview-card">
                <div className="card-label">AVAILABLE TO TRADE <span className="card-icon">↔</span></div>
                <strong>{money(account.cash)}</strong>
                <div className="card-foot"><span>Simulated cash balance</span></div>
              </article>
              <article className="overview-card">
                <div className="card-label">OPEN POSITION <span className="card-icon">▤</span></div>
                <strong>{lvidiaShares.toLocaleString()} <small>shares</small></strong>
                <div className="card-foot"><span>Lvidia · {money(positionValue)} market value</span></div>
              </article>
            </section>

            <section className="market-card watchlist-card">
              <div className="section-heading">
                <div><span className="eyebrow">SIMULATED EXCHANGE</span><h2>Market watch</h2></div>
                <span className="activity-count">{marketQuotes.length} stocks</span>
              </div>
              {marketQuotes.length === 0 ? (
                <p className="chart-status">Loading stocks from the simulated exchange…</p>
              ) : (
                <div className="watchlist-grid">
                  {sortedMarketQuotes.map((quote) => (
                    <a
                      className="watchlist-item"
                      href={`/example?symbol=${encodeURIComponent(quote.name)}`}
                      key={quote.name}
                    >
                      <span className="watchlist-icon">▥</span>
                      <span className="watchlist-name"><b>{quote.name}</b><small>{quote.trend === "positive" ? "Trending up" : quote.trend === "negative" ? "Trending down" : "Simulated"}</small></span>
                      <b className="watchlist-price">{money(quote.price)}</b>
                      <span className="watchlist-arrow">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section className="market-layout">
              <article className="market-card quote-card">
                <div className="section-heading">
                  <div><span className="eyebrow">FEATURED MARKET</span><h2>Lvidia <span className="ticker-tag">LVD</span></h2></div>
                  <a href="/example" className="text-link">View chart <span>↗</span></a>
                </div>
                <div className="quote-price">
                  <strong>{price === null ? "—" : money(price)}</strong>
                  {price !== null && <span className={dayChange >= 0 ? "positive-pill" : "negative-pill"}>{dayChange >= 0 ? "+" : ""}{money(dayChange)} ({dayChangePercent.toFixed(2)}%)</span>}
                </div>
                <div className="quote-visual">
                  <div className="quote-chart" aria-label="Lvidia simulated price trend">
                    <svg viewBox="0 0 700 175" preserveAspectRatio="none" role="img">
                      <defs><linearGradient id="quoteFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2dbb78" stopOpacity=".22" /><stop offset="100%" stopColor="#2dbb78" stopOpacity="0" /></linearGradient></defs>
                      <path className="chart-area" d="M0 130 C40 112 58 129 93 103 S142 117 175 83 214 106 250 78 289 95 328 58 377 82 410 52 455 73 493 40 531 64 567 31 613 52 652 20 700 29 V175 H0 Z" />
                      <path className="chart-stroke" d="M0 130 C40 112 58 129 93 103 S142 117 175 83 214 106 250 78 289 95 328 58 377 82 410 52 455 73 493 40 531 64 567 31 613 52 652 20 700 29" />
                    </svg>
                  </div>
                  <div className="chart-axis"><span>9:30 AM</span><span>12:00 PM</span><span>4:00 PM</span></div>
                </div>
                <div className="quote-stats">
                  <div><span>Market status</span><b><span className="live-dot live-dot-light" /> Simulated live</b></div>
                  <div><span>Your shares</span><b>{lvidiaShares.toLocaleString()} LVD</b></div>
                  <div><span>Position value</span><b>{money(positionValue)}</b></div>
                </div>
              </article>

              <article className="market-card order-card">
                <div className="section-heading">
                  <div><span className="eyebrow">PLACE AN ORDER</span><h2>Trade Lvidia</h2></div>
                  <span className="order-symbol">LVD</span>
                </div>
                <label className="field-label" htmlFor="shares">Number of shares</label>
                <div className="shares-input">
                  <input id="shares" min="0.01" onChange={(event) => setSharesToTrade(event.target.value)} step="0.01" type="number" value={sharesToTrade} />
                  <span>SHARES</span>
                </div>
                <div className="order-estimate"><span>Estimated order</span><b>{price === null ? "—" : money(tradeAmount)}</b></div>
                <div className="order-estimate"><span>Price per share</span><b>{price === null ? "Loading…" : money(price)}</b></div>
                <div className="trade-actions">
                  <button className="primary-button" disabled={price === null || !!accountError} onClick={() => executeTrade("BUY")} type="button">Buy LVD <span>↗</span></button>
                  <button className="secondary-button" disabled={price === null || lvidiaShares <= 0 || !!accountError} onClick={() => executeTrade("SELL")} type="button">Sell</button>
                </div>
                {tradeMessage && <p className="trade-message" role="status">{tradeMessage}</p>}
                <p className="order-disclaimer">Orders use simulated cash only. No real investments are made.</p>
              </article>
            </section>

            <section className="market-card activity-card">
              <div className="section-heading">
                <div><span className="eyebrow">YOUR PAPER ACCOUNT</span><h2>Recent activity</h2></div>
                <span className="activity-count">{account.trades.length} trades</span>
              </div>
              {tradeSummary.length === 0 ? (
                <div className="empty-activity"><span className="empty-icon">↗</span><div><b>No trades yet</b><p>Your Lvidia orders will show up here.</p></div></div>
              ) : (
                <div className="activity-list">
                  {tradeSummary.map((trade) => (
                    <div className="activity-row" key={trade.id}>
                      <span className={`trade-badge ${trade.side.toLowerCase()}`}>{trade.side === "BUY" ? "↗" : "↙"}</span>
                      <div className="activity-name"><b>{trade.side} {trade.symbol}</b><span>{new Date(trade.timestamp).toLocaleString()}</span></div>
                      <span className="activity-shares">{trade.shares.toLocaleString()} shares</span>
                      <b className="activity-total">{money(trade.shares * trade.price)}</b>
                    </div>
                  ))}
                </div>
              )}
            </section>
            <p className="dashboard-footnote">LarpStocks is a simulated trading experience. Prices and balances are for practice only.</p>
          </>
        )}
      </main>
    </div>
  );
}
