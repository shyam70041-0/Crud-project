// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes");
const directoryRoutes = require("./routes/directoryRoutes");

const app = express();

// Connect to Local MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/goldenindustrial"
    );
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Connection Failed:", err.message);
    process.exit(1);
  }
};

connectDB();

// Middleware - Fix CORS and Cookies
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());




// Handle cookies for Chrome
app.use((req, res, next) => {
  res.setHeader("Set-Cookie", "SameSite=None; Secure");
  next();
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/directory", directoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
