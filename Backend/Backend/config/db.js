// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Validate connection string format
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB connection string is missing');
    }
    
    if (!process.env.MONGO_URI.startsWith('mongodb://') && 
        !process.env.MONGO_URI.startsWith('mongodb+srv://')) {
      throw new Error('Invalid MongoDB connection string format');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Database Error: ${err.message}`);
    console.error('Connection string:', process.env.MONGO_URI);
    process.exit(1);
  }
};

module.exports = connectDB;