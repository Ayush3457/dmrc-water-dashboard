const mongoose = require("mongoose");

const RwhSchema = new mongoose.Schema({
  stationName: String,
  structureType: String,
});

module.exports = mongoose.model("Rwh", RwhSchema);