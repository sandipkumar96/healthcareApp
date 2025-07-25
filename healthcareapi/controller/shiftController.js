const shifts = require("../models/shifts");
require("dotenv").config();

exports.getShifts = async (req, res) => {
  try {
    const shiftList = await shifts.find();
    res.status(200).json({ success: true, data: shiftList });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.addShift = async (req, res) => {
  try {
    const { shiftName, shiftStarts, shiftEnds } = req.body;
    if (!shiftName || !shiftStarts || !shiftEnds)
      return res.status(400).json({
        success: false,
        message: "Shift Name, Start Time or End Time not found!",
      });

    const newShift = await shifts.create({ shiftName, shiftStarts, shiftEnds });
    res.status(201).json({ success: true, data: newShift });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateShift = async (req, res) => {
  try {
    const { id } = req.params;
    const { shiftName, shiftStarts, shiftEnds } = req.body;

    if (!shiftName || !shiftStarts || !shiftEnds)
      return res.status(400).json({
        success: false,
        message: "Shift Name, Start Time or End Time not found!",
      });

    const updatedShift = await shifts.findByIdAndUpdate(
      id,
      { shiftName, shiftStarts, shiftEnds },
      { new: true }
    );

    if (!updatedShift)
      return res
        .status(404)
        .json({ success: false, message: "Shift not found!" });

    res.status(200).json({ success: true, data: updatedShift });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
