import { db } from "./database.js";
import { stocksConfig } from "./stocksConfig.js";

let ticksPerSecond = 1;

async function startBot(){
    console.log("STOCKS BOT STARTED WITH CONFIG: ");
    console.log(stocksConfig);

    try {
        await db.read();
        if (!db.data) db.data = {};
        if (!Array.isArray(db.data.stocks)) db.data.stocks = [];

        if (Array.isArray(stocksConfig)) {
            stocksConfig.forEach(stock => {
                const existingIndex = db.data.stocks.findIndex(item => item.name === stock.name);

                if (existingIndex !== -1) {
                    db.data.stocks[existingIndex] = { ...db.data.stocks[existingIndex], ...stock };
                    console.log(`Updated stock in db: ${stock.name}`);
                } else {
                    db.data.stocks.push(stock);
                    console.log(`Inserted stock into db: ${stock.name}`);
                }
            });

            await db.write();
        }
    } catch (e) {
        console.error('Error syncing stocksConfig to db:', e);
    }

    setInterval(() => console.log("bot tick"), 1000 / ticksPerSecond);
}

export { startBot };
export default { startBot };
