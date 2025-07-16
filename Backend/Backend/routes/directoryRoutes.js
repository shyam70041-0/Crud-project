// backend/routes/directoryRoutes.js

const express = require("express");
const router = express.Router();
const Directory = require("../models/directoryModel");

// GET all entries
router.get("/", async (req, res) => {
  try {
    const entries = await Directory.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new entry
router.post("/", async (req, res) => {
  try {
    const { name, mobile, address } = req.body;
    
    const newEntry = new Directory({ name, mobile, address });
    await newEntry.save();
    res.status(201).json({ message: "Entry saved successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
