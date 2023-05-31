const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

router.get("/profile", authMiddleware, userController.getUserProfile);

router.post("/profile", (req, res, next) => {
  res.status(200).send("My profile");
});

module.exports = router;
