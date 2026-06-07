const Profile = require('../models/Profile');
const { ErrorResponse } = require('../utils/responseHandler');

class ProfileService {
  async getProfile() {
    let profile = await Profile.findOne().populate('user', ['name', 'email']);
    if (!profile) {
      throw new ErrorResponse('There is no profile for this user', 404);
    }
    return profile;
  }

  async createOrUpdateProfile(data, userId) {
    let profile = await Profile.findOne({ user: userId });
    
    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: userId },
        { $set: data },
        { new: true, runValidators: true }
      );
      return profile;
    }

    // Create
    data.user = userId;
    profile = await Profile.create(data);
    return profile;
  }
}

module.exports = new ProfileService();
