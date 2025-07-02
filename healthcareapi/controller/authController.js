const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      res.status(400).json({
        success: false,
        message: "Username or Password not found!",
      });
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    await user.create({ username: username, password: hashPassword });
    res
      .status(200)
      .json({ success: true, message: "User created Successfully." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      res
        .status(400)
        .json({ success: false, message: "Username or Password not found!!" });

    const getUser = await user.findOne({ username: username });
    if (!getUser)
      return res
        .status(400)
        .json({ success: false, message: "User not found!" });

    isValidPwd = await bcrypt.compare(password, getUser.password);
    if (!isValidPwd)
      return res
        .status(400)
        .json({ success: false, message: "Password is invalid!" });

    const payload = { username: username };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({ success: true, accessToken: token });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
