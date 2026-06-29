const express = require("express");
const router = express.Router();

const Borewell = require("../models/Borewell");

router.get("/", async (req, res) => {
  try {
    const borewells = await Borewell.find();
    res.json(borewells);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;