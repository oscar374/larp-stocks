'use client';

import { EChartsOption } from 'echarts';
import * as ReactEChartsModule from 'echarts-for-react';

const ReactECharts = (ReactEChartsModule as any).default || ReactEChartsModule;


function calculateMA(dayCount: number, data: number[][]) {
  const result = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (i < dayCount - 1) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += data[i - j][1]; // Index 1 is the 'Close' price
    }
    result.push(+(sum / dayCount).toFixed(2));
  }
  return result;
}


const dates = [
  '2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04', '2024-10-07',
  '2024-10-08', '2024-10-09', '2024-10-10', '2024-10-11', '2024-10-14',
  '2024-10-15', '2024-10-16', '2024-10-17', '2024-10-18', '2024-10-21',
  '2024-10-22', '2024-10-23', '2024-10-24', '2024-10-25', '2024-10-28',
  '2024-10-29', '2024-10-30', '2024-10-31', '2024-11-01', '2024-11-04',
  '2024-11-05', '2024-11-06', '2024-11-07', '2024-11-08', '2024-11-11',
  '2024-11-12', '2024-11-13', '2024-11-14', '2024-11-15', '2024-11-18',
  '2024-11-19', '2024-11-20', '2024-11-21', '2024-11-22', '2024-11-25'
];

const stockData = [
  [150.25, 153.10, 149.80, 154.50],
  [153.00, 151.80, 150.50, 154.20],
  [152.10, 155.40, 151.90, 156.00],
  [155.50, 154.20, 153.00, 157.10],
  [154.00, 158.30, 153.50, 159.00],
  [158.50, 157.10, 155.80, 160.20],
  [157.00, 161.50, 156.40, 162.00],
  [161.80, 159.90, 158.50, 163.40],
  [160.10, 163.25, 159.50, 164.00],
  [163.50, 166.80, 162.90, 167.50],
  [166.50, 164.20, 163.00, 167.80],
  [164.00, 162.10, 160.50, 165.00],
  [162.30, 158.90, 157.80, 163.10],
  [159.00, 161.40, 158.20, 162.50],
  [161.50, 160.00, 159.10, 163.00],
  [160.20, 156.80, 155.40, 161.10],
  [157.00, 159.30, 156.00, 160.50],
  [159.50, 163.10, 158.80, 164.00],
  [163.00, 165.75, 162.20, 166.80],
  [165.80, 164.10, 163.50, 167.20],
  [164.00, 168.20, 163.80, 169.00],
  [168.50, 171.40, 167.90, 172.50],
  [171.20, 169.80, 168.50, 173.00],
  [170.00, 174.50, 169.20, 175.80],
  [174.80, 172.30, 171.00, 176.20],
  [172.50, 176.10, 172.00, 177.00],
  [176.20, 179.80, 175.50, 181.00],
  [180.00, 177.50, 176.00, 181.50],
  [177.80, 182.40, 177.10, 183.20],
  [182.50, 180.90, 179.50, 184.00],
  [181.00, 185.30, 180.20, 186.50],
  [185.50, 183.80, 182.10, 187.00],
  [183.90, 188.10, 183.00, 189.20],
  [188.00, 186.40, 185.00, 189.80],
  [186.50, 190.20, 185.80, 191.50],
  [190.00, 188.50, 187.20, 192.00],
  [188.80, 193.10, 188.00, 194.50],
  [193.00, 191.20, 189.90, 195.00],
  [191.50, 196.40, 190.80, 197.80],
  [196.50, 195.00, 193.50, 198.20]
];

export default function SampleStocks() {
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
        start: 20,
        end: 100,
      },
      {
        type: 'slider', 
        show: true,
        top: '85%',
        start: 20,
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
      <h1 className="text-5xl mb-4">sample stocks</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}