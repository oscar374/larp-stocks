import express from "express";
import { startBot } from "./stocksBot.js";
import { db } from "./database.js";

const app = express();
const PORT = 8000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

startBot();

app.get("/", (req, res) => {
  res.send("default gatewayy");
});

app.get("/stocks", async (req, res) => {
  await db.read();
  res.json(db.data?.stocks || []);
});

app.post("/clearData", (req, res) => {
  db.stocks = {};
});


app.get("/getCandles", async (req, res) => {
  const { symbol, howMany, ticksInCandle } = req.query;

  if (!symbol) return res.status(400).json({ error: "missing symbol" });
  if (!howMany) return res.status(400).json({ error: "missing howMany" });
  if (!ticksInCandle) return res.status(400).json({ error: "missing ticksInCandle" });

  const howManyInt = parseInt(howMany, 10);
  const ticksInCandleInt = parseInt(ticksInCandle, 10);

  if (
    Number.isNaN(howManyInt) ||
    howManyInt <= 0 ||
    Number.isNaN(ticksInCandleInt) ||
    ticksInCandleInt <= 0
  ) {
    return res.status(400).json({ error: "incorrect arguments" });
  }

  await db.read();

  const stock = db.data?.stocks?.find((s) => s.name.toLowerCase() === String(symbol).toLowerCase());  //symbol fnd

  if (!stock) return res.status(404).json({ error: "incorrect stock name symbol" });

  const ticks = stock.ticks || [];
  if (ticks.length === 0) return res.json([]);

  const totalTicksNeeded = howManyInt * ticksInCandleInt;
  const recentTicks = ticks.slice(-totalTicksNeeded);

  const candles = [];

  for (let i = 0; i < recentTicks.length; i += ticksInCandleInt) {
    const chunk = recentTicks.slice(i, i + ticksInCandleInt);
    if (chunk.length === 0) continue;

    const open = chunk[0].price;
    const close = chunk[chunk.length - 1].price;
    
    let lowest = chunk[0].price;
    let highest = chunk[0].price;

    for (let j = 0; j < chunk.length; j++) {
      const price = chunk[j].price;
      if (price < lowest) lowest = price;
      if (price > highest) highest = price;
    }

    const date = chunk[0].date;

    candles.push([open, close, lowest, highest, date]);
  }

  return res.json(candles);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});