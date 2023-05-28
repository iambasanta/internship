"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const { sequelize, connect } = require("./db");
const bodyParser = require("body-parser");

app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

connect();
const userRouter = require("./routes/user");

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
