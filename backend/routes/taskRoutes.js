const express = require("express");
const router = express.Router();

// Test Route
router.get("/", (req, res) => {
  res.json({ message: "Tasks API is working!" });
});

// Add other CRUD routes here...

module.exports = router;
