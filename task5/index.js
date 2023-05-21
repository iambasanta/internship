"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const userRouter = require("./routes/user");
const productRouter = require("./routes/products");

app.use("/user", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Exposed on port 3000");
});
