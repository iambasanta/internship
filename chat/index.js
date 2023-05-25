"use strict";

const express = require("express");
const socket = require("socket.io");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send("Hello");
});

const server = app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const io = socket(server);
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});
