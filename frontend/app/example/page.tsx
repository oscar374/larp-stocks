'use client';

import React, { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';
import * as ReactEChartsModule from 'echarts-for-react';

const ReactECharts = (ReactEChartsModule as any).default || ReactEChartsModule;

type BackendCandle = [number, number, number, number, number];

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
  const [dates, setDates] = useState<string[]>([]);
  const [stockData, setStockData] = useState<number[][]>([]);

  useEffect(() => {
    async function fetchCandles() {
      try {
        const queryParams = new URLSearchParams({
          symbol: "LVIDIA",
          howMany: "500",
          ticksInCandle: "60",
        });

        const response = await fetch(`http://localhost:8000/getCandles?${queryParams}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BackendCandle[] = await response.json();

        if (Array.isArray(data)) {
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
        }
      } catch (error) {
        console.error("Failed to fetch candles:", error);
      } finally {
      }
    }

    fetchCandles();

    const interval = setInterval(fetchCandles, 1000);
    return () => clearInterval(interval);

  }, []);

  const option: EChartsOption = {
    legend: {
      data: ['Candlestick', 'MA5', 'MA10'],
      top: 10,
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
    },
    yAxis: {
      scale: true,
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
      },
      {
        name: 'MA5',
        type: 'line',
        data: calculateMA(5, stockData),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: '#5470c6',
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
      <h1 className="text-5xl mb-4">Lvidia example</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}