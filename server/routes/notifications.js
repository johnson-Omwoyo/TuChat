const express = require("express");
const router = express.Router();
const Notification = require("../models/notification");

// Get All Notifications
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (error) {
    res.status(500).send("Error retrieving notifications.");
  }
});

module.exports = router;
