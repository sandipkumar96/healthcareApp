const staff = require("../models/staff");
const department = require("../models/department");
const shifts = require("../models/shifts");
const configureShift = require("../models/configureShift");
require("dotenv").config();

exports.addConfigureShift = async (req, res) => {
  try {
    const { shiftId, roleId, capacity } = req.body;
    if (!shiftId || !roleId || !capacity)
      return res.status(400).json({
        success: false,
        message: "Shift ID, Role ID or Capacity not found!",
      });

    const newConfigureShift = await configureShift.create({
      shiftId,
      roleId,
      capacity,
    });
    res.status(201).json({ success: true, data: newConfigureShift });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getConfigureShifts = async (req, res) => {
  try {
    const configureShiftList = await configureShift.find();
    res.status(200).json({ success: true, data: configureShiftList });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateConfigureShift = async (req, res) => {
  try {
    const { id } = req.params;
    const { shiftId, roleId, capacity } = req.body;

    if (!shiftId || !roleId || !capacity)
      return res.status(400).json({
        success: false,
        message: "Shift ID, Role ID or Capacity not found!",
      });

    const updatedConfigureShift = await configureShift.findByIdAndUpdate(
      id,
      { shiftId, roleId, capacity },
      { new: true }
    );

    if (!updatedConfigureShift)
      return res
        .status(404)
        .json({ success: false, message: "Configure Shift not found!" });

    res.status(200).json({ success: true, data: updatedConfigureShift });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
