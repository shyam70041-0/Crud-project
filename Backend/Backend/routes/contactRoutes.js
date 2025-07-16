const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

console.log('connect route')
router.post("/", contactController.submitContact);

router.get("/", contactController.getContacts);

module.exports = router;
