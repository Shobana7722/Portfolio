const mongoose = require('mongoose');
const slugify = require('slugify');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters']
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  technologies: {
    type: [String],
    required: true
  },
  imageUrl: {
    type: String,
    default: 'no-photo.jpg'
  },
  gallery: {
    type: [String]
  },
  githubUrl: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  liveUrl: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create project slug from the title
ProjectSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Project', ProjectSchema);
