const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtVerify");
const {
  getStaff,
  addStaff,
  updateStaff,
} = require("../controller/staffController");
const {
  getDepartment,
  addDepartment,
} = require("../controller/departmentController");

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ success: true, message: "Protected api" });
});

router.post("/staff", verifyToken, addStaff);
router.get("/staff", verifyToken, getStaff);
router.put("/staff/:id", verifyToken, updateStaff);

router.get("/department", verifyToken, getDepartment);
router.post("/department", verifyToken, addDepartment);

module.exports = router;
