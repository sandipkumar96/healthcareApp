const department = require("../models/department");

exports.getDepartment = async (req, res) => {
  try {
    const departments = await department.find(
      {},
      { _id: 0, departmentName: 1, departmentCode: 1, status: 1 }
    );
    res.status(200).json({ success: true, data: departments });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.addDepartment = async (req, res) => {
  try {
    const { departmentName, departmentCode } = req.body;
    if (!departmentName || !departmentCode)
      return res.status(400).json({
        success: false,
        message: "Department Name or code not found!",
      });

    const newDepartment = await department.create({
      departmentName,
      departmentCode,
    });
    res.status(201).json({ success: true, data: newDepartment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
