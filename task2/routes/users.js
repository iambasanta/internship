const express = require("express");
const router = express.Router();
const db = require("../db");

const multer = require("multer");

router.get("/", async (req, res) => {
  const users = await db.query(`SELECT * FROM users;`);
  res.render("users/index", { users: users.rows });
});

router.get("/register", (req, res) => {
  res.render("users/register");
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
  const avatar = req.file.filename;

  const insertQuery = ` INSERT INTO users (firstname, lastname, username, avatar) VALUES('${firstName}', '${lastName}', '${userName}', '${avatar}'); `;
  const newUser = await db.query(insertQuery);
  console.log(newUser);
  res.redirect("/users");
});

module.exports = router;
