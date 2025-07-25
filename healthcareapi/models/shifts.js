const mongoose = require("mongoose");

const shift = new mongoose.Schema({
  shiftName: {
    type: String,
    required: true,
  },
  shiftStarts: {
    type: String,
    required: true,
  },
  shiftEnds: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("shifts", shift);
