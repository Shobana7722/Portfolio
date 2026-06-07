const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a skill name']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Frontend', 'Backend', 'Database', 'Tools', 'Other']
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 100
  },
  icon: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Skill', SkillSchema);
