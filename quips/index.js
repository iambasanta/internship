"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
