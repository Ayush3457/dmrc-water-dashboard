const express = require("express");
const router = express.Router();

const { Parser } = require("json2csv");
const Station = require("../models/Station");

router.get("/stations", async (req, res) => {
  try {
    const stations = await Station.find();

    const fields = [
      "stationName",
      "line"
    ];

    const parser = new Parser({
      fields
    });

    const csv = parser.parse(stations);

    res.header(
      "Content-Type",
      "text/csv"
    );

    res.attachment(
      "stations.csv"
    );

    return res.send(csv);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;