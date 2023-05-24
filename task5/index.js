"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

const userRouter = require("./routes/user");
const productRouter = require("./routes/products");

app.use("/user", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log("Exposed on port 3000");
});
