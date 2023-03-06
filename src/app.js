import express, { json } from "express";
import * as dotenv from "dotenv";
// import test from "./api/test";

// setup
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// use
app.use(json());

app.get("/", async (req, res) => {
  res.json({ status: true, message: "Our node.js app works" });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
