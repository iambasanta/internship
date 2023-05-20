"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const productRouter = require("./routes/products");
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Exposed on port 3000");
});
