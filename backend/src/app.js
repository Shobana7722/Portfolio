const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');

// Initialize app
const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});
app.use(limiter);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static folder for local uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Basic Route for health check
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio Backend API is running'
  });
});

// Import Routes
const routes = require('./routes');
app.use('/api/v1', routes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found'
  });
});

// Import Error Middleware
const errorHandler = require('./middleware/error.middleware');
app.use(errorHandler);

module.exports = app;
