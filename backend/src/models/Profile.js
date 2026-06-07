const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please add a professional title']
  },
  bio: {
    type: String,
    required: [true, 'Please add a short bio']
  },
  location: {
    type: String
  },
  avatar: {
    type: String,
    default: 'default.jpg'
  },
  resumeUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
