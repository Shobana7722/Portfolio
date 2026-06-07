const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please add about content']
  },
  highlights: {
    type: [String]
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('About', AboutSchema);
