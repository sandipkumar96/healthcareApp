const mongoose = require("mongoose");

const configure = new mongoose.Schema({
  shiftId: {
    type: Number,
    required: true,
  },
  roleId: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("configureShifts", configure);
