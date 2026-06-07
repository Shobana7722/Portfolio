const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
    default: 'My Portfolio'
  },
  seoDescription: {
    type: String
  },
  seoKeywords: {
    type: String
  },
  theme: {
    type: String,
    enum: ['light', 'dark', 'system'],
    default: 'system'
  },
  maintenanceMode: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Setting', SettingSchema);
