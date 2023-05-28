"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.set("view engine", "ejs");

const userRouter = require("./routes/user");

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
