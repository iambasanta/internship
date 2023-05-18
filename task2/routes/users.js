const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const multer = require("multer");

// const JWT_TOKEN =
//   "77ae6f2f4dd616eb9a2f43178a7e44c186da1d5e3be763d19425353ac0565d2a3827590080166279df92a6ef754cee4e0438996beb131973f0d2103d6b34d630";

const authorizeUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    res.json(token);
    jwt.verify(token, JWT_TOKEN);
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized user!");
  }
};

router.get("/", async (req, res) => {
  const users = await db.query(`SELECT * FROM users;`);
  res.render("users/index", { users: users.rows });
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/avatars");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-` + file.originalname);
  },
});

const upload = multer({ storage: multerStorage });

router.post("/register", upload.single("avatar"), async (req, res) => {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const userName = req.body.username;
  const password = req.body.password;
  const avatar = req.file.filename;

  const insertQuery = `INSERT INTO users (firstname, lastname, username, password, avatar) VALUES('${firstName}', '${lastName}', '${userName}', '${password}', '${avatar}'); `;
  const newUser = await db.query(insertQuery);
  res.redirect("/users/login");
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const result = await db.query(
    `SELECT * FROM users WHERE username='${username}' AND password='${password}';`
  );

  if (result.rows[0]) {
    const accessToken = jwt.sign(username, process.env.JWT_TOKEN);
    console.log(accessToken);
    res.redirect("/users");
  } else {
    console.log("Credentials do not match our record!");
  }
});

module.exports = router;
