const express = require("express");
const router = express.Router();
const Conversation = require("../models/conversation");

// Get All Conversations
router.get("/", async (req, res) => {
  try {
    const conversations = await Conversation.findAll();
    res.json(conversations);
  } catch (error) {
    res.status(500).send("Error retrieving conversations.");
  }
});

module.exports = router;
