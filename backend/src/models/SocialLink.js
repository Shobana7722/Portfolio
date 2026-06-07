const mongoose = require('mongoose');

const SocialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: [true, 'Please add a platform name (e.g. LinkedIn, GitHub)']
  },
  url: {
    type: String,
    required: [true, 'Please add the URL'],
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  icon: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('SocialLink', SocialLinkSchema);
