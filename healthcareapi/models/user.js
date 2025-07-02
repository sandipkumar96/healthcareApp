const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("users", user);
