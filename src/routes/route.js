import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

router.get("/", homeController.getHomePage);

router.get("*", (req, res) => {
  res.send("Page 404!");
});

module.exports = router;
