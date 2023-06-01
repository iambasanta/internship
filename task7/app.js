"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

// Middlewares
app.use(express.json());

// Routers
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/categories");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
