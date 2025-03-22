const express = require("express");
const router = express.Router();
const MessageStatus = require("../models/message_status");

// Get All Message Statuses
router.get("/", async (req, res) => {
  try {
    const statuses = await MessageStatus.findAll();
    res.json(statuses);
  } catch (error) {
    res.status(500).send("Error retrieving message statuses.");
  }
});

module.exports = router;
