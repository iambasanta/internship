"use strict";

const db = require("../db");
const UserSchema = require("../models/user");

async function registerUser(req, res, next) {
  try {
    const { username, email, password } = req.body;

    const registeredUser = await UserSchema.findOne({ where: { username } });
    console.log(registeredUser);

    if (registeredUser) {
      return res.send(400).send("User already registered.");
    }

    await UserSchema.create({ username, email, password });

    console.log("User registered successfully!");
    res.redirect("/user/login");
  } catch (error) {
    console.error("Failed to register user:", error);
  }
}

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({
      where: { email, password },
    });

    if (!user) {
      console.log("User logged in successfully!");
      res.redirect("/user/register");
    } else {
      console.log("Credentials do not match our record!");
    }
  } catch (error) {
    console.error("Failed to login user:", error);
  }
}

module.exports = { registerUser, loginUser };
