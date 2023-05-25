"use strict";

const express = require("express");
const socket = require("socket.io");
const app = express();

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
