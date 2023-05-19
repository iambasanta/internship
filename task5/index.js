"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Exposed on port 3000");
});
