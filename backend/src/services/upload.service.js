const cloudinary = require('../config/cloudinary');
const fs = require('fs');

class UploadService {
  async uploadToCloudinary(localFilePath, folder) {
    try {
      if (!localFilePath) return null;
      
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: 'auto',
        folder: `portfolio/${folder}`
      });
      
      // Delete the local file after upload
      fs.unlinkSync(localFilePath);
      
      return response.secure_url;
    } catch (error) {
      fs.unlinkSync(localFilePath); // remove locally saved temp file
      throw error;
    }
  }

  async deleteFromCloudinary(publicId) {
    try {
      if (!publicId) return;
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error('Error deleting from Cloudinary', error);
    }
  }
}

module.exports = new UploadService();
