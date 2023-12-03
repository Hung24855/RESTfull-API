const express = require("express");
const app = express();
require("dotenv").config();

const configViewEngine = require("./config/configViewEngine");
const configStaticFile = require("./config/configStaticFile");
configViewEngine(app);
configStaticFile(app);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Project đang chạy với cổng : ${port}`);
});
