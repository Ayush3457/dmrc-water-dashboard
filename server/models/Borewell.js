const mongoose = require("mongoose");

const BorewellSchema = new mongoose.Schema({
  stationName: String,
  status: String,
});

module.exports = mongoose.model("Borewell", BorewellSchema);