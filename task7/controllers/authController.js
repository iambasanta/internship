const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

function generateToken(userId) {
  const payload = {
    user: {
      id: userId,
    },
  };

  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1hr" });
}

async function register(req, res) {
  const { name, email, password, avatar, role, address } = req.body;

  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ error: "Email has already been taken" });
    }
    user = User.create({ name, email, password, avatar, role, address });
    const token = generateToken(user.id);
    res.json({ message: "User registered successfully", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Credentials do not match our record" });
    }
    const passwordMatch = password === user.password;
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ error: "Credentials do not match our record" });
    }

    const token = generateToken(user.id);
    res.json({ message: "User logged in successfully", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { register, login };
