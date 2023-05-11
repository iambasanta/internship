const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

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

app.get("/users", (req, res) => {
  res.render("users", { users: users });
});

app.get("/users/register", (req, res) => {
  res.render("register");
});

app.post("/users/register", (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  return res.render("users", { users: users });
});

app.listen(8000, () => {
  console.log("Running 8000");
});
