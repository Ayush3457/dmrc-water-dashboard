const express = require("express");
const router = express.Router();

const Station = require("../models/Station");
const Borewell = require("../models/Borewell");
const Rwh = require("../models/Rwh");

router.get("/", async (req, res) => {
  try {
    const lineData = await Station.aggregate([
      {
        $group: {
          _id: "$line",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 1
      }
    ]);

    const maintenance = await Borewell.countDocuments({
      status: "Maintenance"
    });

    const rwhCount = await Rwh.countDocuments();

    res.json({
      topLine: lineData[0]?._id || "N/A",
      maintenance,
      rwhCount
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;