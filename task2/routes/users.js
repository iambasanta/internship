const express = require("express");
const router = express.Router();

const multer = require("multer");

const users = [];

router.get("/", (req, res) => {
  res.render("users/index", { users: users });
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

router.post("/register", upload.single("avatar"), (req, res) => {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const userName = req.body.username;
  const avatar = req.file.path;

  users.push({ firstName, lastName, userName, avatar });
  res.redirect("/users");
});

module.exports = router;
