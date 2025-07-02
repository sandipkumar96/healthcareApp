const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.verifyToken = (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token)
      return res
        .status(400)
        .json({ success: false, message: "Token not found!" });

    verify = jwt.verify(token, process.env.JWT_SECRETKEY);
    if (!verify)
      return res
        .status(400)
        .json({ success: false, message: "Invalid token!" });

    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
