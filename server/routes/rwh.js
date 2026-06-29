const express = require("express");
const router = express.Router();

const Rwh = require("../models/Rwh");

router.get("/", async (req, res) => {
  try {
    const rwhs = await Rwh.find();
    res.json(rwhs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;