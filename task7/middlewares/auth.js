const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = {
      userId: decoded.user.id,
    };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid access token" });
  }
};

module.exports = authMiddleware;
