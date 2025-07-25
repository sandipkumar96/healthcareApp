const staff = require("../models/staff");

exports.getStaff = async (req, res) => {
  try {
    const staffList = await staff.find();
    res.status(200).json({ success: true, data: staffList });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.addStaff = async (req, res) => {
  try {
    const { name, role, department, contact } = req.body;
    if (!name || !role || !department)
      return res.status(400).json({
        success: false,
        message: "Name, Role or Department not found!",
      });

    const newStaff = await staff.create({ name, role, department, contact });
    res.status(201).json({ success: true, data: newStaff });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, department, contact } = req.body;

    if (!name || !role || !department)
      return res.status(400).json({
        success: false,
        message: "Name, Role or Department not found!",
      });

    const updatedStaff = await staff.findByIdAndUpdate(
      id,
      { name, role, department, contact },
      { new: true }
    );

    if (!updatedStaff)
      return res
        .status(404)
        .json({ success: false, message: "Staff not found!" });

    res.status(200).json({ success: true, data: updatedStaff });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.staffDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const staffDetails = await staff.findById(id);

    if (!staffDetails)
      return res
        .status(404)
        .json({ success: false, message: "Staff not found!" });

    res.status(200).json({ success: true, data: staffDetails });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
