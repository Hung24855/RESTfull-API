const express = require("express");

const configStaticFile = (app) => {
  app.use(express.static("./src/public"));
};
module.exports = configStaticFile;
