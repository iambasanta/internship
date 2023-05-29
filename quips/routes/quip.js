"use strict";
const express = require("express");
const router = express.Router();
const db = require("../db");
const QuipSchema = require("../models/quip");
const { createQuip } = require("../controllers/quip");

router.get("/", async (req, res, next) => {
  const quips = await QuipSchema.findAll();
  res.render("quip/index", { quips: quips });
});

router.post("/create", createQuip);

module.exports = router;
