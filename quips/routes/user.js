"use strict";

const express = require("express");
const router = express.Router();
const db = require("../db");
const UserSchema = require("../models/user");
const { registerUser, loginUser } = require("../controllers/user");

router.get("/register", (req, res, next) => {
  res.render("user/register");
});

router.post("/register", registerUser);

router.get("/login", (req, res, next) => {
  res.render("user/login");
});

router.post("/login", loginUser);

module.exports = router;
