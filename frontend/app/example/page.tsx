'use client';

import React, { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import Sidebar from '@/components/sidebar';
import { useRouter } from 'next/navigation';
import {
  applyPaperTrade,
  loadPaperAccount,
  PaperAccount,
  savePaperAccount,
  TradeSide,
} from '@/lib/paperTrading';
import { recordOpenedStock } from '@/lib/recentStocks';
import { useDarkTheme } from '@/lib/theme';

type BackendCandle = [number, number, number, number, number];

function money(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function calculateMA(dayCount: number, data: number[][]) {
  const result = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (i < dayCount - 1) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += data[i - j][1]; 
    }
    result.push(+(sum / dayCount).toFixed(2));
  }
  return result;
}

export default function Example() {
  const router = useRouter();
  const darkTheme = useDarkTheme();
  const [dates, setDates] = useState<string[]>([]);
  const [stockData, setStockData] = useState<number[][]>([]);
  const [symbol, setSymbol] = useState('Lvidia');
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState<PaperAccount | null>(null);
  const [sharesToTrade, setSharesToTrade] = useState('1');
  const [tradeMessage, setTradeMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      const signedInEmail = localStorage.getItem('larp-stocks-demo-user');
      if (!signedInEmail) {
        router.replace('/');
        return;
      }
      setEmail(signedInEmail);
      try {
        setAccount(loadPaperAccount(signedInEmail));
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Unable to load paper account.');
      }

      const selectedSymbol = new URLSearchParams(window.location.search).get('symbol');
      if (selectedSymbol) setSymbol(selectedSymbol);
      try {
        recordOpenedStock(selectedSymbol || 'Lvidia');
      } catch (storageError) {
        setError(storageError instanceof Error ? storageError.message : 'Unable to save recently opened stock.');
      }
    });
    return () => {
      active = false;
    };
  }, [router]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCandles() {
      try {
        const queryParams = new URLSearchParams({
          symbol,
          howMany: "120",
          ticksInCandle: "4",
        });

        const response = await fetch(`http://localhost:8000/getCandles?${queryParams}`, {
          signal: controller.signal,
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BackendCandle[] = await response.json();

        if (Array.isArray(data)) {
          if (data.length === 0) throw new Error(`No market data available for ${symbol}.`);
          const formattedDates = data.map((item) =>
            new Date(item[4]).toLocaleTimeString()
          );

          const formattedStockData = data.map((item) => [
            item[0], // open
            item[1], // close
            item[2], // lowest
            item[3], // highest
          ]);

          setDates(formattedDates);
          setStockData(formattedStockData);
          setError('');
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setError(error instanceof Error ? error.message : `Unable to load the ${symbol} market feed.`);
      } finally {
        setLoading(false);
      }
    }

    void fetchCandles();

    const interval = setInterval(() => void fetchCandles(), 2000);
    return () => {
      controller.abort();
      clearInterval(interval);
    };

  }, [symbol]);

  const price = stockData.length ? stockData[stockData.length - 1][1] : null;
  const ownedShares = account?.holdings[symbol] ?? 0;

  function executeTrade(side: TradeSide) {
    if (!account || !email || price === null) return;
    try {
      const updatedAccount = applyPaperTrade(account, symbol, side, Number(sharesToTrade), price);
      savePaperAccount(email, updatedAccount);
      setAccount(updatedAccount);
      setTradeMessage(`${side === 'BUY' ? 'Bought' : 'Sold'} ${sharesToTrade} ${symbol} shares at ${money(price)}.`);
    } catch (tradeError) {
      setTradeMessage(tradeError instanceof Error ? tradeError.message : 'Order could not be completed.');
    }
  }

  const option: EChartsOption = {
    animation: true,
    animationDuration: 0,
    animationDurationUpdate: 700,
    animationEasingUpdate: 'cubicOut',
    backgroundColor: 'transparent',
    textStyle: { color: darkTheme ? '#d8d8c8' : '#57645b' },
    legend: {
      data: ['Candlestick', 'MA5', 'MA10'],
      top: 10,
      textStyle: { color: darkTheme ? '#d8d8c8' : '#57645b' },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLabel: { color: darkTheme ? '#aaa994' : '#7b877f' },
      axisLine: { lineStyle: { color: darkTheme ? '#495247' : '#dce4de' } },
    },
    yAxis: {
      scale: true,
      axisLabel: { color: darkTheme ? '#aaa994' : '#7b877f' },
      axisLine: { lineStyle: { color: darkTheme ? '#495247' : '#dce4de' } },
      splitLine: { lineStyle: { color: darkTheme ? '#303d33' : '#e9eeea' } },
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
      {
        type: 'slider',
        show: true,
        top: '85%',
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: 'Candlestick',
        type: 'candlestick',
        data: stockData,
        itemStyle: {
          color: darkTheme ? '#c6a64b' : '#ec6b66',
          color0: darkTheme ? '#247c50' : '#39a675',
          borderColor: darkTheme ? '#d3b85e' : '#ec6b66',
          borderColor0: darkTheme ? '#42ad75' : '#39a675',
        },
      },
      {
        name: 'MA5',
        type: 'line',
        data: calculateMA(5, stockData),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: '#6c91ff',
        },
      },
      {
        name: 'MA10',
        type: 'line',
        data: calculateMA(10, stockData),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: '#91cc75',
        },
      },
    ],
  };

    return (
    <div>
      <div className="siteContainer">
        <Sidebar/>
        <div className="content">
            <div className="chart-page-heading">
              <div><span className="eyebrow">SIMULATED MARKET · {symbol.toUpperCase()}</span><h1>{symbol} market</h1></div>
              <a className="text-link" href="/dashboard">Back to trading desk <span>→</span></a>
            </div>
            {error && <div className="notice notice-error" role="alert">{error}. Make sure the backend is running on port 8000.</div>}
            {loading && <p className="chart-status">Connecting to the simulated market…</p>}
            <div className="stock-detail-layout">
              <section className="market-card stock-chart-card">
                <div className="stock-quote-bar">
                  <div><span className="eyebrow">LATEST SIMULATED PRICE</span><strong>{price === null ? '—' : money(price)}</strong></div>
                  <div><span className="eyebrow">YOUR POSITION</span><strong>{ownedShares.toLocaleString()} shares</strong></div>
                </div>
                <div className="stock-chart">
                  <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
                </div>
              </section>
              <section className="market-card stock-order-card">
                <span className="eyebrow">PAPER TRADING</span>
                <h2>Trade {symbol}</h2>
                <p>Available simulated cash <strong>{account ? money(account.cash) : '—'}</strong></p>
                <label className="field-label" htmlFor="stock-shares">Number of shares</label>
                <div className="shares-input">
                  <input id="stock-shares" min="0.01" onChange={(event) => setSharesToTrade(event.target.value)} step="0.01" type="number" value={sharesToTrade} />
                  <span>SHARES</span>
                </div>
                <div className="order-estimate"><span>Estimated order</span><b>{price === null ? '—' : money(Number(sharesToTrade) * price)}</b></div>
                <div className="trade-actions">
                  <button className="primary-button" disabled={!account || price === null} onClick={() => executeTrade('BUY')} type="button">Buy {symbol} <span>↗</span></button>
                  <button className="secondary-button" disabled={!account || price === null || ownedShares <= 0} onClick={() => executeTrade('SELL')} type="button">Sell</button>
                </div>
                {tradeMessage && <p className="trade-message" role="status">{tradeMessage}</p>}
                <p className="order-disclaimer">Paper trades only. No real money or investment.</p>
              </section>
            </div>
        </div>
      </div>
    </div>
  );
}