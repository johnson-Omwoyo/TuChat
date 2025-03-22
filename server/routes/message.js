const express = require("express");
const router = express.Router();
const Messages = require("../models/message"); // Import Model

// Get All Messages
router.get("/", async (req, res) => {
  try {
    const messages = await Messages.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } });
    res.json(messages);
  } catch (error) {
    res.status(500).send("Error retrieving messages.");
  }
});

// Add a Message
router.post("/", async (req, res) => {
  try {
    const { sender_id, receiver_id, content, type, attachment, timestamp } = req.body;
    await Messages.create({ sender_id, receiver_id, content, type, attachment, timestamp });
    res.send("Message added successfully.");
  } catch (error) {
    res.status(500).send("Error adding message.");
  }
});

module.exports = router;
