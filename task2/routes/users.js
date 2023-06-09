const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const multer = require("multer");

const authorizeUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_TOKEN);
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized user!");
  }
};

router.get("/", authorizeUser, async (req, res) => {
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
  await db.query(insertQuery);
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
    res.cookie("accessToken", accessToken, { maxAge: 100000 });
    res.redirect("/users");
  } else {
    console.log("Credentials do not match our record!");
  }
});

module.exports = router;
