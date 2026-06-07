const Project = require('../models/Project');
const APIFeatures = require('../utils/apiFeatures');
const { ErrorResponse } = require('../utils/responseHandler');

class ProjectService {
  async getAllProjects(query) {
    const features = new APIFeatures(Project.find(), query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    return await features.query;
  }

  async getProjectById(id) {
    const project = await Project.findById(id);
    if (!project) {
      throw new ErrorResponse(`Project not found with id of ${id}`, 404);
    }
    return project;
  }

  async createProject(data) {
    return await Project.create(data);
  }

  async updateProject(id, data) {
    const project = await Project.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
    if (!project) {
      throw new ErrorResponse(`Project not found with id of ${id}`, 404);
    }
    return project;
  }

  async deleteProject(id) {
    const project = await Project.findById(id);
    if (!project) {
      throw new ErrorResponse(`Project not found with id of ${id}`, 404);
    }
    await project.deleteOne();
    return project;
  }
}

module.exports = new ProjectService();
