const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/register", (req, res, next) => {
  res.status(200).send("Register page");
});

router.post("/register", authController.register);

router.get("/login", (req, res, next) => {
  res.status(200).send("Login page");
});

router.post("/login", authController.login);

module.exports = router;
