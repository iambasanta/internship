"use strict";
const db = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");

async function authenticatedUser(req, res, next) {
  const authToken = req.cookies.auth_token;
  if (!authToken) return res.redirect("/user/login");

  const user = jwt.verify(authToken, process.env.SECRET_KEY);
  if (!user) return res.redirect("/user/login");

  req.user = user;
  next();
}

function authorizeUser(role) {
  return async (req, res, next) => {
    try {
      const loggedInUserEmail = jwt.verify(
        req.cookies.auth_token,
        process.env.SECRET_KEY
      );
      const result = await db.query(
        `SELECT * FROM users WHERE email = '${loggedInUserEmail}'`
      );
      const user = result.rows[0];
      if (user.role !== role) {
        return res.status(401).send("Unauthorized access!");
      }
      next();
    } catch (error) {
      console.log("ERROR", err);
    }
  };
}

module.exports = { authenticatedUser, authorizeUser };
