const express = require("express");
const app = express();
require("dotenv").config();

const configViewEngine = require("./config/configViewEngine");
configViewEngine(app);
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Project đang chạy với cổng : ${port}`);
});
