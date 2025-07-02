const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtVerify");

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ success: true, message: "Protected api" });
});

module.exports = router;
