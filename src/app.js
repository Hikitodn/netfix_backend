import express, { json } from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import { db } from "./config/connectDB";

// setup
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// use
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("connected");
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
