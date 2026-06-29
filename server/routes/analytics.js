const express = require("express");
const router = express.Router();

const Station = require("../models/Station");

router.get("/line-distribution", async (req, res) => {
  try {
    const data = await Station.aggregate([
      {
        $group: {
          _id: "$line",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/borewell-status", async (req, res) => {
  try {
    const Borewell = require("../models/Borewell");

    const data = await Borewell.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/rwh-distribution", async (req, res) => {
  try {
    const Rwh = require("../models/Rwh");

    const data = await Rwh.aggregate([
      {
        $group: {
          _id: "$structureType",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;