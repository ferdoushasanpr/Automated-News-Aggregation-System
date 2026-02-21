const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const cron = require("node-cron");
const port = 3000;

const { syncNewsData } = require("./controllers/articleController");
const articleRouter = require("./routers/articleRouter");

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/news", articleRouter);

//"0 */6 * * *" - every 6 hours

cron.schedule("* * * * *", () => {
  console.log("Running scheduled news sync...");
  syncNewsData();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
