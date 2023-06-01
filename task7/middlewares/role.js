const User = require("../models/User");

const checkRole = (roles) => {
  return async (req, res, next) => {
    const { userId } = req.user;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findByPk(userId);

    if (!roles.includes(user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};

module.exports = checkRole;
