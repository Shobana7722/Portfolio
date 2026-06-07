const mongoose = require('mongoose');
const env = require('./env');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.mongoUri, {
      // Use defaults as modern mongoose doesn't require deprecated options
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
