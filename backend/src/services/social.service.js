const SocialLink = require('../models/SocialLink');
const { ErrorResponse } = require('../utils/responseHandler');

class SocialService {
  async getLinks() {
    return await SocialLink.find().sort('order');
  }

  async createLink(data) {
    return await SocialLink.create(data);
  }

  async updateLink(id, data) {
    const link = await SocialLink.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
    if (!link) throw new ErrorResponse('Social link not found', 404);
    return link;
  }

  async deleteLink(id) {
    const link = await SocialLink.findById(id);
    if (!link) throw new ErrorResponse('Social link not found', 404);
    await link.deleteOne();
    return link;
  }
}

module.exports = new SocialService();
