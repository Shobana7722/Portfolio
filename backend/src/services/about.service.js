const About = require('../models/About');
const { ErrorResponse } = require('../utils/responseHandler');

class AboutService {
  async getAbout() {
    return await About.findOne();
  }

  async createOrUpdateAbout(data) {
    let about = await About.findOne();
    
    if (about) {
      about = await About.findOneAndUpdate(
        {},
        { $set: data },
        { new: true, runValidators: true }
      );
      return about;
    }

    about = await About.create(data);
    return about;
  }
}

module.exports = new AboutService();
