const express = require("express");
const router = express.Router();

const users = [
  {
    name: "Thio",
    email: "thio@email.com",
    password: "password",
  },

  {
    name: "Prime",
    email: "prime@email.com",
    password: "password",
  },

  {
    name: "Tsoding",
    email: "tsoding@email.com",
    password: "password",
  },
];

router.get("/", (req, res) => {
  res.render("users/index", { users: users });
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  res.redirect("/users");
});

module.exports = router;
