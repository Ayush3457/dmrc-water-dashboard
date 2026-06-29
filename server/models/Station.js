const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
  stationName: String,
  line: String,
});

module.exports = mongoose.model("Station", StationSchema);