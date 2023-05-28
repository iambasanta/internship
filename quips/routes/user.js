"use strict";

const express = require("express");
const router = express.Router();
const db = require("../db");
const UserSchema = require("../models/user");

router.get("/register", (req, res, next) => {
  res.render("user/register");
});

router.get("/login", (req, res, next) => {
  res.render("user/login");
});

module.exports = router;
