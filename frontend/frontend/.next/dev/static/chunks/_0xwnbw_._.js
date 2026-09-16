(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/sampleStocks/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SampleStocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2d$for$2d$react$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/echarts-for-react/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const ReactECharts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2d$for$2d$react$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$echarts$2d$for$2d$react$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
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
    const option = {
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
                'MA10'
            ],
            top: 5
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            type: 'category',
            data: dates,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0)'
                }
            }
        },
        yAxis: {
            scale: true,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.15)'
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
                    color: '#5156e476'
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
                    color: '#75ef8789'
                },
                emphasis: {
                    focus: 'series'
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
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl mb-4",
                            children: "sample stocks"
                        }, void 0, false, {
                            fileName: "[project]/app/sampleStocks/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '40vw',
                                height: '35vh'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactECharts, {
                                className: "sample-stocks",
                                option: option,
                                style: {
                                    width: '100%',
                                    height: '100%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/sampleStocks/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/sampleStocks/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/sampleStocks/page.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/sampleStocks/page.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/sampleStocks/page.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c = SampleStocks;
var _c;
__turbopack_context__.k.register(_c, "SampleStocks");
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
"use client";
;
function Sidebar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "32px",
                        viewBox: "0 -960 960 960",
                        width: "32px",
                        fill: "#76FFB2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M280-160v-86.67h-80v-466.66h80V-800h66.67v86.67h80v466.66h-80V-160H280Zm-13.33-153.33H360v-333.34h-93.33v333.34ZM613.33-160v-206.67h-80v-266.66h80V-800H680v166.67h80v266.66h-80V-160h-66.67ZM600-433.33h93.33v-133.34H600v133.34ZM313.33-480Zm333.34-20Z"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 9,
                            columnNumber: 116
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "LarpStocks"
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "sidebarButton",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                height: "20px",
                                viewBox: "0 -960 960 960",
                                width: "20px",
                                fill: "#e3e3e3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M336-552H216q-33 0-52.5-19.5T144-624v-120q0-33 19.5-52.5T216-816h120q33 0 52.5 19.5T408-744v120q0 33-19.5 52.5T336-552Zm-120-72h120v-120H216v120Zm120 480H216q-33 0-52.5-19.5T144-216v-120q0-33 19.5-52.5T216-408h120q33 0 52.5 19.5T408-336v120q0 33-19.5 52.5T336-144Zm-120-72h120v-120H216v120Zm528-336H624q-33 0-52.5-19.5T552-624v-120q0-33 19.5-52.5T624-816h120q33 0 52.5 19.5T816-744v120q0 33-19.5 52.5T744-552Zm-120-72h120v-120H624v120Zm120 480H624q-33 0-52.5-19.5T552-216v-120q0-33 19.5-52.5T624-408h120q33 0 52.5 19.5T816-336v120q0 33-19.5 52.5T744-144Zm-120-72h120v-120H624v120ZM336-624Zm0 288Zm288-288Zm0 288Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 14,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 14,
                                columnNumber: 9
                            }, this),
                            "Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 16,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "sidebarButton",
                        href: "/sampleStocks",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                height: "20px",
                                viewBox: "0 -960 960 960",
                                width: "20px",
                                fill: "#e3e3e3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M336-552H216q-33 0-52.5-19.5T144-624v-120q0-33 19.5-52.5T216-816h120q33 0 52.5 19.5T408-744v120q0 33-19.5 52.5T336-552Zm-120-72h120v-120H216v120Zm120 480H216q-33 0-52.5-19.5T144-216v-120q0-33 19.5-52.5T216-408h120q33 0 52.5 19.5T408-336v120q0 33-19.5 52.5T336-144Zm-120-72h120v-120H216v120Zm528-336H624q-33 0-52.5-19.5T552-624v-120q0-33 19.5-52.5T624-816h120q33 0 52.5 19.5T816-744v120q0 33-19.5 52.5T744-552Zm-120-72h120v-120H624v120Zm120 480H624q-33 0-52.5-19.5T552-216v-120q0-33 19.5-52.5T624-408h120q33 0 52.5 19.5T816-336v120q0 33-19.5 52.5T744-144Zm-120-72h120v-120H624v120ZM336-624Zm0 288Zm288-288Zm0 288Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 18,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 18,
                                columnNumber: 9
                            }, this),
                            "sample stocks"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 20,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "sidebarButton",
                        href: "/example",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                height: "20px",
                                viewBox: "0 -960 960 960",
                                width: "20px",
                                fill: "#e3e3e3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M336-552H216q-33 0-52.5-19.5T144-624v-120q0-33 19.5-52.5T216-816h120q33 0 52.5 19.5T408-744v120q0 33-19.5 52.5T336-552Zm-120-72h120v-120H216v120Zm120 480H216q-33 0-52.5-19.5T144-216v-120q0-33 19.5-52.5T216-408h120q33 0 52.5 19.5T408-336v120q0 33-19.5 52.5T336-144Zm-120-72h120v-120H216v120Zm528-336H624q-33 0-52.5-19.5T552-624v-120q0-33 19.5-52.5T624-816h120q33 0 52.5 19.5T816-744v120q0 33-19.5 52.5T744-552Zm-120-72h120v-120H624v120Zm120 480H624q-33 0-52.5-19.5T552-216v-120q0-33 19.5-52.5T624-408h120q33 0 52.5 19.5T816-336v120q0 33-19.5 52.5T744-144Zm-120-72h120v-120H624v120ZM336-624Zm0 288Zm288-288Zm0 288Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 22,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 22,
                                columnNumber: 9
                            }, this),
                            "Lvidia"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0xwnbw_._.js.map