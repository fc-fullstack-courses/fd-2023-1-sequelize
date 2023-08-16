const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
}