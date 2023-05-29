"use strict";

const db = require("../db");
const QuipSchema = require("../models/quip");

async function createQuip(req, res, next) {
  try {
    const { quip } = req.body;

    await QuipSchema.create({ quip });

    console.log("Quip created successfully!");
    res.redirect("/");
  } catch (error) {
    console.error("Failed create quip:", error);
  }
}

module.exports = { createQuip };
