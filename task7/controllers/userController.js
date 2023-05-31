const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

async function getUserProfile(req, res) {
  try {
    const { userId } = req.user;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to get user profile" });
  }
}

module.exports = { getUserProfile };
