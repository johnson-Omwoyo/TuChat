const express = require("express");
const router = express.Router();
const ConversationMember = require("../models/conversation_member");

// Get All Conversation Members
router.get("/", async (req, res) => {
  try {
    const members = await ConversationMember.findAll();
    res.json(members);
  } catch (error) {
    res.status(500).send("Error retrieving conversation members.");
  }
});

module.exports = router;
