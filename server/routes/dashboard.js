const express = require("express");
const router = express.Router();

const Station = require("../models/Station");
const Borewell = require("../models/Borewell");
const Rwh = require("../models/Rwh");



router.get("/", async (req, res) => {

  const stations = await Station.countDocuments();
  
  const borewells = await Borewell.countDocuments();

  const working = await Borewell.countDocuments({
    status: "Working"
  });

  const maintenance = await Borewell.countDocuments({
    status: "Maintenance"
  });

  const rwhs = await Rwh.countDocuments();

  res.json({
    stations,
    borewells,
    rwhs,
    working,
    maintenance
  });

});

module.exports = router;