const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a job title']
  },
  company: {
    type: String,
    required: [true, 'Please add a company name']
  },
  location: {
    type: String
  },
  from: {
    type: Date,
    required: [true, 'Please add a start date']
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
