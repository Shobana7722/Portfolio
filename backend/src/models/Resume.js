const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the resume']
  },
  fileUrl: {
    type: String,
    required: [true, 'Please provide the file URL']
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);
