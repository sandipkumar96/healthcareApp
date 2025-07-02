const mongoose = require("mongoose");
require("dotenv").config();
exports.connectDB = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("MongoDB connection error");
  });
