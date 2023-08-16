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

module.exports.getUsers = async (req, res, next) => {
  try {
    
    // SELECT * FROM users;
    const users = await User.findAll();

    // SELECT fullName, isMale FROM users;
    // const users = await User.findAll({
    //   attributes: ['fullName', 'isMale']
    // });

    // // SELECT fullName, bonusAmount as money FROM users;
    // const users = await User.findAll({
    //   attributes: ['fullName', ['bonus_amount', 'money']]
    // });

    // SELECT id, fullName, email, isMale, ... as money FROM users;
    // const users = await User.findAll({
    //   attributes: {
    //     exclude: ['password']
    //   }
    // });

    res.send(users);
  } catch (error) {
    next(error);
  }
}

