const mongoose = require("mongoose");

const staff = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  department: {
    type: Number,
    required: true,
  },
  contact: {
    type: String,
  },
});

module.exports = mongoose.model("staff", staff);
