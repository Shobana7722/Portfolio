const multer = require('multer');
const path = require('path');
const ErrorResponse = require('../utils/responseHandler').ErrorResponse;

// Multer config for local storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let dest = 'src/uploads/';
    
    if (file.fieldname === 'resume') {
      dest += 'resumes/';
    } else if (file.fieldname === 'projectImage') {
      dest += 'projects/';
    } else if (file.fieldname === 'avatar') {
      dest += 'profile/';
    } else {
      dest += 'gallery/';
    }
    
    cb(null, dest);
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new ErrorResponse('Error: Invalid file type!', 400));
  }
}

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
});

module.exports = upload;
