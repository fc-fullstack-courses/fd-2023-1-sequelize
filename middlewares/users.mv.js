const createHttpError = require('http-errors');
const { User } = require('../db/models');

module.exports.findUser = async (req, res, next) => {
  try {
    const { params: { userId } } = req;
    const user = await User.findByPk(userId);

    if (!user) {
      return next(createHttpError(404, 'User not found'));
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}