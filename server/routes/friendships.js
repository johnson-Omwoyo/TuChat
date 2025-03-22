const express = require("express");
const router = express.Router();
const Friendship = require("../models/friendship");

// Get All Friendships
router.get("/", async (req, res) => {
  try {
    const friendships = await Friendship.findAll();
    res.json(friendships);
  } catch (error) {
    res.status(500).send("Error retrieving friendships.");
  }
});

module.exports = router;
