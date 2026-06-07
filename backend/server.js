const path = require('path');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = require('./src/app');
const connectDB = require('./src/config/db');
const env = require('./src/config/env');

// Connect to database
connectDB();

const PORT = env.port || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${env.env} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
