'use client';

import { EChartsOption } from 'echarts';
import * as ReactEChartsModule from 'echarts-for-react';
import "../globals.css";

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
  ' 10-01', ' 10-02', ' 10-03', ' 10-04', ' 10-07',
  ' 10-08', ' 10-09', ' 10-10', ' 10-11', ' 10-14',
  ' 10-15', ' 10-16', ' 10-17', ' 10-18', ' 10-21',
  ' 10-22', ' 10-23', ' 10-24', ' 10-25', ' 10-28',
  ' 10-29', ' 10-30', ' 10-31', ' 11-01', ' 11-04',
  ' 11-05', ' 11-06', ' 11-07', ' 11-08', ' 11-11',
  ' 11-12', ' 11-13', ' 11-14', ' 11-15', ' 11-18',
  ' 11-19', ' 11-20', ' 11-21', ' 11-22', ' 11-25'
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
    // Tightens the inner canvas padding while preventing axis label clipping
    grid: {
      top: 40,
      left: 10,
      right: 10,
      bottom: 10,
      containLabel: true,
    },
    legend: {
      data: ['Candlestick', 'MA5', 'MA10'],
      top: 5,
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
      splitLine: {
        show: true, // Grid lines on x-axis (vertical lines)
        lineStyle: {
          color: 'rgba(255, 255, 255, 0)',
        },
      },
    },
    yAxis: {
      scale: true,
         splitLine: {
        show: true, // Grid lines on x-axis (vertical lines)
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
        },
      },
    },
    dataZoom: [
      {
        type: 'inside', 
        start: 0,
        end: 100,
      },
      {
        type: 'slider', 
        show: false,
        bottom: 10,
        height: 20,
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: 'Candlestick',
        type: 'candlestick',
        data: stockData,
        emphasis: {
          focus: 'series',
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
          color: '#5156e476',
        },
        emphasis: {
          focus: 'series',
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
          color: '#75ef8789',
        },
        emphasis: {
          focus: 'series',
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-5xl mb-4">sample stocks</h1>
      <div style={{ width: '40vw', height: '35vh' }}>
        <ReactECharts className="sample-stocks" option={option} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}