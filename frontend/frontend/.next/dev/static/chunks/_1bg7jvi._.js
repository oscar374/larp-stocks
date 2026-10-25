(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/sampleStocks/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SampleStocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2d$for$2d$react$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/echarts-for-react/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function calculateMA(dayCount, data) {
    const result = [];
    for(let i = 0, len = data.length; i < len; i++){
        if (i < dayCount - 1) {
            result.push('-');
            continue;
        }
        let sum = 0;
        for(let j = 0; j < dayCount; j++){
            sum += data[i - j][1]; // Index 1 is the 'Close' price
        }
        result.push(+(sum / dayCount).toFixed(2));
    }
    return result;
}
const dates = [
    ' 10-01',
    ' 10-02',
    ' 10-03',
    ' 10-04',
    ' 10-07',
    ' 10-08',
    ' 10-09',
    ' 10-10',
    ' 10-11',
    ' 10-14',
    ' 10-15',
    ' 10-16',
    ' 10-17',
    ' 10-18',
    ' 10-21',
    ' 10-22',
    ' 10-23',
    ' 10-24',
    ' 10-25',
    ' 10-28',
    ' 10-29',
    ' 10-30',
    ' 10-31',
    ' 11-01',
    ' 11-04',
    ' 11-05',
    ' 11-06',
    ' 11-07',
    ' 11-08',
    ' 11-11',
    ' 11-12',
    ' 11-13',
    ' 11-14',
    ' 11-15',
    ' 11-18',
    ' 11-19',
    ' 11-20',
    ' 11-21',
    ' 11-22',
    ' 11-25'
];
const stockData = [
    [
        150.25,
        153.10,
        149.80,
        154.50
    ],
    [
        153.00,
        151.80,
        150.50,
        154.20
    ],
    [
        152.10,
        155.40,
        151.90,
        156.00
    ],
    [
        155.50,
        154.20,
        153.00,
        157.10
    ],
    [
        154.00,
        158.30,
        153.50,
        159.00
    ],
    [
        158.50,
        157.10,
        155.80,
        160.20
    ],
    [
        157.00,
        161.50,
        156.40,
        162.00
    ],
    [
        161.80,
        159.90,
        158.50,
        163.40
    ],
    [
        160.10,
        163.25,
        159.50,
        164.00
    ],
    [
        163.50,
        166.80,
        162.90,
        167.50
    ],
    [
        166.50,
        164.20,
        163.00,
        167.80
    ],
    [
        164.00,
        162.10,
        160.50,
        165.00
    ],
    [
        162.30,
        158.90,
        157.80,
        163.10
    ],
    [
        159.00,
        161.40,
        158.20,
        162.50
    ],
    [
        161.50,
        160.00,
        159.10,
        163.00
    ],
    [
        160.20,
        156.80,
        155.40,
        161.10
    ],
    [
        157.00,
        159.30,
        156.00,
        160.50
    ],
    [
        159.50,
        163.10,
        158.80,
        164.00
    ],
    [
        163.00,
        165.75,
        162.20,
        166.80
    ],
    [
        165.80,
        164.10,
        163.50,
        167.20
    ],
    [
        164.00,
        168.20,
        163.80,
        169.00
    ],
    [
        168.50,
        171.40,
        167.90,
        172.50
    ],
    [
        171.20,
        169.80,
        168.50,
        173.00
    ],
    [
        170.00,
        174.50,
        169.20,
        175.80
    ],
    [
        174.80,
        172.30,
        171.00,
        176.20
    ],
    [
        172.50,
        176.10,
        172.00,
        177.00
    ],
    [
        176.20,
        179.80,
        175.50,
        181.00
    ],
    [
        180.00,
        177.50,
        176.00,
        181.50
    ],
    [
        177.80,
        182.40,
        177.10,
        183.20
    ],
    [
        182.50,
        180.90,
        179.50,
        184.00
    ],
    [
        181.00,
        185.30,
        180.20,
        186.50
    ],
    [
        185.50,
        183.80,
        182.10,
        187.00
    ],
    [
        183.90,
        188.10,
        183.00,
        189.20
    ],
    [
        188.00,
        186.40,
        185.00,
        189.80
    ],
    [
        186.50,
        190.20,
        185.80,
        191.50
    ],
    [
        190.00,
        188.50,
        187.20,
        192.00
    ],
    [
        188.80,
        193.10,
        188.00,
        194.50
    ],
    [
        193.00,
        191.20,
        189.90,
        195.00
    ],
    [
        191.50,
        196.40,
        190.80,
        197.80
    ],
    [
        196.50,
        195.00,
        193.50,
        198.20
    ]
];
function SampleStocks() {
    _s();
    const darkTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDarkTheme"])();
    const [predictedChange, setPredictedChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [forecastPeriods, setForecastPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const currentPrice = stockData[stockData.length - 1][1];
    const forecast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SampleStocks.useMemo[forecast]": ()=>{
            const projectedPrices = Array.from({
                length: forecastPeriods
            }, {
                "SampleStocks.useMemo[forecast].projectedPrices": (_, index)=>+(currentPrice * (1 + predictedChange / 100 * ((index + 1) / forecastPeriods))).toFixed(2)
            }["SampleStocks.useMemo[forecast].projectedPrices"]);
            return {
                dates: [
                    ...dates,
                    ...projectedPrices.map({
                        "SampleStocks.useMemo[forecast]": (_, index)=>`D+${index + 1}`
                    }["SampleStocks.useMemo[forecast]"])
                ],
                prices: [
                    ...Array(stockData.length - 1).fill(null),
                    currentPrice,
                    ...projectedPrices
                ],
                targetPrice: projectedPrices[projectedPrices.length - 1] ?? currentPrice
            };
        }
    }["SampleStocks.useMemo[forecast]"], [
        currentPrice,
        forecastPeriods,
        predictedChange
    ]);
    const option = {
        backgroundColor: 'transparent',
        textStyle: {
            color: darkTheme ? '#d8d8c8' : '#57645b'
        },
        // Tightens the inner canvas padding while preventing axis label clipping
        grid: {
            top: 40,
            left: 10,
            right: 10,
            bottom: 10,
            containLabel: true
        },
        legend: {
            data: [
                'Candlestick',
                'MA5',
                'MA10',
                'Prediction'
            ],
            top: 5,
            textStyle: {
                color: darkTheme ? '#d8d8c8' : '#57645b'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            type: 'category',
            data: forecast.dates,
            axisLabel: {
                color: darkTheme ? '#aaa994' : '#7b877f'
            },
            axisLine: {
                lineStyle: {
                    color: darkTheme ? '#495247' : '#dce4de'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: darkTheme ? 'rgba(214, 199, 126, 0.06)' : 'rgba(255, 255, 255, 0)'
                }
            }
        },
        yAxis: {
            scale: true,
            axisLabel: {
                color: darkTheme ? '#aaa994' : '#7b877f'
            },
            axisLine: {
                lineStyle: {
                    color: darkTheme ? '#495247' : '#dce4de'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: darkTheme ? 'rgba(214, 199, 126, 0.13)' : 'rgba(32, 56, 41, 0.08)'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                type: 'slider',
                show: false,
                bottom: 10,
                height: 20,
                start: 0,
                end: 100
            }
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
                    borderColor0: darkTheme ? '#42ad75' : '#39a675'
                },
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5, stockData),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 2,
                    color: darkTheme ? '#d0b45d' : '#5156e4'
                },
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10, stockData),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    width: 2,
                    color: darkTheme ? '#6fba8c' : '#75c687'
                },
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'Prediction',
                type: 'line',
                data: forecast.prices,
                smooth: false,
                showSymbol: true,
                symbolSize: 7,
                lineStyle: {
                    width: 2,
                    type: 'dashed',
                    color: predictedChange >= 0 ? '#208b5b' : '#c65d5d'
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "siteContainer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/sampleStocks/page.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content sample-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chart-page-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: "LEARN THE MARKET"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Market sandbox"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 67
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "account-chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "secure-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 44
                                        }, this),
                                        "PREDICTION MODE"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/sampleStocks/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sample-intro",
                            children: "Shape a hypothetical price move and see how it could play out. Your prediction is a visual simulation, not a live trade."
                        }, void 0, false, {
                            fileName: "[project]/app/sampleStocks/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sample-page-layout",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "market-card sample-chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "eyebrow",
                                                            children: "HISTORICAL SAMPLE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Market movement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 72
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sample-price",
                                                    children: [
                                                        "$",
                                                        currentPrice.toFixed(2),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: "latest close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 75
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sample-chart",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2d$for$2d$react$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "sample-stocks",
                                                option: option,
                                                style: {
                                                    width: '100%',
                                                    height: '100%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/sampleStocks/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prediction-legend",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 50
                                                }, this),
                                                " Dashed line shows your predicted path; historical candles stay unchanged."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "market-card prediction-menu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: "SCENARIO BUILDER"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Predict a change"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "prediction-copy",
                                            children: "Adjust the assumed price move. The chart updates instantly."
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prediction-value",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Expected change"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: predictedChange < 0 ? 'prediction-down' : '',
                                                    children: [
                                                        predictedChange > 0 ? '+' : '',
                                                        predictedChange,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "prediction-slider-label",
                                            htmlFor: "prediction-change",
                                            children: "Change from current price"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "prediction-slider",
                                            id: "prediction-change",
                                            max: "30",
                                            min: "-30",
                                            onChange: (event)=>setPredictedChange(Number(event.target.value)),
                                            step: "1",
                                            type: "range",
                                            value: predictedChange
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "slider-labels",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "-30%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "0%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 63
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "+30%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 78
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "field-label forecast-label",
                                            htmlFor: "forecast-periods",
                                            children: "Forecast periods"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "forecast-periods",
                                            onChange: (event)=>setForecastPeriods(Number(event.target.value)),
                                            value: forecastPeriods,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 3,
                                                    children: "3 periods"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 5,
                                                    children: "5 periods"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 8,
                                                    children: "8 periods"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 12,
                                                    children: "12 periods"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "forecast-result",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Hypothetical target"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: predictedChange < 0 ? 'prediction-down' : '',
                                                    children: [
                                                        "$",
                                                        forecast.targetPrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        "After ",
                                                        forecastPeriods,
                                                        " simulated periods"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "secondary-button reset-prediction",
                                            onClick: ()=>{
                                                setPredictedChange(0);
                                                setForecastPeriods(5);
                                            },
                                            type: "button",
                                            children: "Reset prediction"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sampleStocks/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/sampleStocks/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/sampleStocks/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/sampleStocks/page.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/sampleStocks/page.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/sampleStocks/page.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(SampleStocks, "pMqCtFwm/O/qn4Gc003O4tVPm3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDarkTheme"]
    ];
});
_c = SampleStocks;
var _c;
__turbopack_context__.k.register(_c, "SampleStocks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/brandMark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BrandMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "brand-mark",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 4v16M12 2v20M19 6v14",
                    stroke: "currentColor",
                    strokeWidth: "1.7",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/brandMark.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.5 7h3v5h-3zM10.5 6h3v7h-3zM17.5 10h3v4h-3z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/brandMark.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/brandMark.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/brandMark.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = BrandMark;
var _c;
__turbopack_context__.k.register(_c, "BrandMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$brandMark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/brandMark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recentStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/recentStocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const DEMO_USER_KEY = "larp-stocks-demo-user";
function Sidebar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [recentStocks, setRecentStocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [darkTheme, setDarkTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const updateRecentStocks = {
                "Sidebar.useEffect.updateRecentStocks": ()=>setRecentStocks((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recentStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readRecentStocks"])())
            }["Sidebar.useEffect.updateRecentStocks"];
            const savedTheme = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_KEY"]);
            const useDarkTheme = savedTheme === "dark";
            document.documentElement.dataset.theme = useDarkTheme ? "dark" : "light";
            queueMicrotask({
                "Sidebar.useEffect": ()=>setDarkTheme(useDarkTheme)
            }["Sidebar.useEffect"]);
            queueMicrotask(updateRecentStocks);
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recentStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECENT_STOCKS_EVENT"], updateRecentStocks);
            window.addEventListener("storage", updateRecentStocks);
            return ({
                "Sidebar.useEffect": ()=>{
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recentStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECENT_STOCKS_EVENT"], updateRecentStocks);
                    window.removeEventListener("storage", updateRecentStocks);
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    function toggleTheme() {
        const nextIsDark = !darkTheme;
        setDarkTheme(nextIsDark);
        document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_KEY"], nextIsDark ? "dark" : "light");
        window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_EVENT"]));
    }
    function signOut() {
        localStorage.removeItem(DEMO_USER_KEY);
        router.replace("/");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "brand sidebar-brand",
                href: "/dashboard",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$brandMark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LarpStocks"
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-label",
                children: "WORKSPACE"
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sidebar-nav",
                "aria-label": "Main navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: `sidebar-link${pathname === "/dashboard" ? " active" : ""}`,
                        href: "/dashboard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: "▦"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            "Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: `sidebar-link${pathname === "/sampleStocks" ? " active" : ""}`,
                        href: "/sampleStocks",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: "◫"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            "Market samples"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: `sidebar-link${pathname === "/example" ? " active" : ""}`,
                        href: "/example",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: "⌁"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            "Larp market",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-live-dot"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    recentStocks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-label recent-sidebar-label",
                                children: "RECENT STOCKS"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            recentStocks.map((symbol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "sidebar-link recent-stock-link",
                                    href: `/example?symbol=${encodeURIComponent(symbol)}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "recent-stock-icon",
                                            children: "▥"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sidebar.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        symbol
                                    ]
                                }, symbol, true, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": darkTheme,
                        className: "theme-toggle-button",
                        onClick: toggleTheme,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: darkTheme ? "☾" : "☼"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            darkTheme ? "Dark theme" : "Light theme",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `theme-switch${darkTheme ? " enabled" : ""}`,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "sign-out-button",
                        onClick: signOut,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: "↪"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            "Sign out"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sidebar-version",
                        children: "LARPSTOCKS · DEMO EDITION"
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "IgzLumv7nsaSeYpvgaOdJjWJzaQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/recentStocks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RECENT_STOCKS_EVENT",
    ()=>RECENT_STOCKS_EVENT,
    "RECENT_STOCKS_KEY",
    ()=>RECENT_STOCKS_KEY,
    "readRecentStocks",
    ()=>readRecentStocks,
    "recordOpenedStock",
    ()=>recordOpenedStock
]);
const RECENT_STOCKS_KEY = "larp-stocks-recent-stocks";
const RECENT_STOCKS_EVENT = "larp-stocks-recent-stocks-changed";
const MAX_RECENT_STOCKS = 8;
function readRecentStocks() {
    const saved = JSON.parse(localStorage.getItem(RECENT_STOCKS_KEY) ?? "[]");
    return Array.isArray(saved) ? saved.filter((symbol)=>typeof symbol === "string").slice(0, MAX_RECENT_STOCKS) : [];
}
function recordOpenedStock(symbol) {
    const next = [
        symbol,
        ...readRecentStocks().filter((recentSymbol)=>recentSymbol.toLowerCase() !== symbol.toLowerCase())
    ].slice(0, MAX_RECENT_STOCKS);
    localStorage.setItem(RECENT_STOCKS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(RECENT_STOCKS_EVENT));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1bg7jvi._.js.map