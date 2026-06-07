const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, 'Please add a school name']
  },
  degree: {
    type: String,
    required: [true, 'Please add a degree or certificate']
  },
  fieldOfStudy: {
    type: String,
    required: [true, 'Please add a field of study']
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

module.exports = mongoose.model('Education', EducationSchema);
