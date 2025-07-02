const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/authController");
router.post("/register", async (req, res) => {
  await register(req, res);
});

router.post("/login", async (req, res) => {
  await login(req, res);
});

module.exports = router;
