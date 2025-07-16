// backend/models/directoryModel.js

const mongoose = require("mongoose");

const directorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Directory", directorySchema);
