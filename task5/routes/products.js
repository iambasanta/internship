"use strict";
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("products/index");
});

router.get("/create", (req, res, next) => {
  res.render("products/create");
});

module.exports = router;
