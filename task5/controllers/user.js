"user strict";
const db = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");

async function registerUser(req, res, next) {
  const { email, password } = req.body;
  const role = req.body.role.toUpperCase();

  const user = await db.query(
    `INSERT INTO users (email, password, role) VALUES('${email}', '${password}', '${role}');`
  );

  if (!user) {
    console.log("Failed to register user!");
  }

  console.log("User registered successfully!");
  res.redirect("/user/login");
}

async function loginUser(req, res, next) {
  const { email, password } = req.body;

  const user = await db.query(
    `SELECT * FROM users WHERE email='${email}' AND password='${password}'`
  );

  if (!user) {
    console.log("Credentials do not match our record!");
  }

  const userToken = jwt.sign(email, process.env.SECRET_KEY);
  res.cookie("auth_token", userToken);
  res.redirect("/products");
}

module.exports = { registerUser, loginUser };
