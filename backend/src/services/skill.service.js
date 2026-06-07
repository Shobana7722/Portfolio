const Skill = require('../models/Skill');
const { ErrorResponse } = require('../utils/responseHandler');

class SkillService {
  async getAllSkills() {
    return await Skill.find().sort('order');
  }

  async createSkill(data) {
    return await Skill.create(data);
  }

  async updateSkill(id, data) {
    const skill = await Skill.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
    if (!skill) throw new ErrorResponse(`Skill not found`, 404);
    return skill;
  }

  async deleteSkill(id) {
    const skill = await Skill.findById(id);
    if (!skill) throw new ErrorResponse(`Skill not found`, 404);
    await skill.deleteOne();
    return skill;
  }
}

module.exports = new SkillService();
