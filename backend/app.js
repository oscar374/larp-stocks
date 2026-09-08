

import express from "express";
import { startBot } from "./stocksBot.js";

const app = express();
const PORT = 8000;

startBot();

app.get("/", (req, res) => {
  res.send("default gatewayy");
});

app.get("/stocks", (req, res) => {
  res.json();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});