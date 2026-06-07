const User = require('../models/User');
const { ErrorResponse } = require('../utils/responseHandler');

class AuthService {
  async register(data) {
    const { name, email, password, role } = data;
    const user = await User.create({
      name,
      email,
      password,
      role
    });
    return user;
  }

  async login(email, password) {
    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new ErrorResponse('Invalid credentials', 401);
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      throw new ErrorResponse('Invalid credentials', 401);
    }

    return user;
  }

  async getMe(id) {
    return await User.findById(id);
  }
}

module.exports = new AuthService();
