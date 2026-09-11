import { db } from "./database.js";
import { stocksConfig } from "./stocksConfig.js";

let ticksPerSecond = 1;
let maximumNumberOfTicks = 900000;
let botIntervalId = null;

async function setupDatabase() {
    await db.read();

    if (!db.data || typeof db.data !== "object") {
        db.data = {};
    }

    if (!Array.isArray(db.data.stocks)) {
        db.data.stocks = [];
    }

    if (Array.isArray(stocksConfig)) {
        stocksConfig.forEach(stock => {
            const existingIndex = db.data.stocks.findIndex(
                item => item.name === stock.name
            );

            if (existingIndex !== -1) {
                db.data.stocks[existingIndex] = {
                    ...db.data.stocks[existingIndex],
                    ...stock
                };

                console.log(`Updated stock in db: ${stock.name}`);
            } else {
                db.data.stocks.push(stock);
                console.log(`Inserted stock into db: ${stock.name}`);
            }
        });

        await db.write();
    }
}

function startTimer() {
    if (botIntervalId) {
        clearInterval(botIntervalId);
    }

    botIntervalId = setInterval(() => {
        botTick();
    }, 1000 / ticksPerSecond);
}

function setTickRate(newRate) {
    if (newRate > 0) {
        ticksPerSecond = newRate;
        startTimer();
    }
}

async function startBot() {
    console.log("STOCKS BOT STARTED WITH CONFIG: ");
    console.log(stocksConfig);

    try {
        await setupDatabase();
    } catch (e) {
        console.error("Error syncing stocksConfig to db:", e);
    }

    botTick();
    startTimer();
}

async function botTick() {
    try {
        if (!db.data || !Array.isArray(db.data.stocks)) {
            console.log("Stocks database is missing or invalid. Rebuilding...");

            await setupDatabase();

            if (!Array.isArray(db.data.stocks)) {
                console.error("Failed to initialize stocks database.");
                return;
            }
        }

        let needsWrite = false;

        db.data.stocks.forEach((stock, index) => {
            if (!stock.ticks || !Array.isArray(stock.ticks)) {
                stock.ticks = [];
            }

            if (!stock.trend) {
                stock.trend = Math.random() > 0.5 ? "positive" : "negative";
                needsWrite = true;
            }

            if (
                stock.trendChangeChanceEveryTick &&
                Math.random() < stock.trendChangeChanceEveryTick
            ) {
                stock.trend =
                    stock.trend === "positive"
                        ? "negative"
                        : "positive";
            }

            let currentPrice = stock.startingPrice;

            if (stock.ticks.length === 0) {
                stock.ticks.push({
                    date: Date.now(),
                    price: currentPrice
                });

                needsWrite = true;
            } else {
                currentPrice =
                    stock.ticks[stock.ticks.length - 1].price;
            }

            let minMultiplier = -0.1;
            let maxMultiplier = 0.1;

            if (stock.trend === "negative") minMultiplier = -0.15;
            if (stock.trend === "positive") maxMultiplier = 0.15;

            const minChange = stock.wildness * minMultiplier;
            const maxChange = stock.wildness * maxMultiplier;

            const priceChange =
                Math.random() * (maxChange - minChange) + minChange;

            let newPrice = currentPrice + priceChange;
            newPrice = Math.floor(newPrice * 100) / 100;

            if (newPrice < 0) newPrice = 0;

            let newDate = Date.now();
            const lastDate =
                stock.ticks[stock.ticks.length - 1].date;

            if (newDate <= lastDate) {
                newDate = lastDate + 1;
            }

            stock.ticks.push({
                date: newDate,
                price: newPrice
            });

            if (stock.ticks.length > maximumNumberOfTicks) {
                stock.ticks.shift();
            }

            needsWrite = true;
        });

        if (needsWrite) {
            await db.write();
        }
    } catch (e) {
        console.error("Error in botTick:", e);
    }
}

export { startBot, setTickRate };
export default { startBot, setTickRate };