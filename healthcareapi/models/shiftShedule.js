const mongoose = require("mongoose");

const shedule = new mongoose.Schema({
  shiftId: {
    type: Number,
    required: true,
  },
  staffId: {
    type: Number,
    required: true,
  },
  sheduleDate: {
    type: Date,
    required: true,
  },
  attendance: {
    type: Number,
    default: false,
  },
});

module.exports = mongoose.model("shiftShedule", shedule);
