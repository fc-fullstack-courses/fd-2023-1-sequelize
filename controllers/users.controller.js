const createHttpError = require('http-errors');
const { User, Sequelize: { Op } } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
}

module.exports.getUsers = async (req, res, next) => {
  try {

    // SELECT * FROM users;
    // const users = await User.findAll();

    // SELECT fullName, isMale FROM users;
    // const users = await User.findAll({
    //   attributes: ['fullName', 'isMale']
    // });

    // // SELECT fullName, bonusAmount as money FROM users;
    // const users = await User.findAll({
    //   attributes: ['fullName', ['bonus_amount', 'money']]
    // });

    // SELECT id, fullName, email, isMale, ... as money FROM users
    // WHERE isMale = false OR id = 1;
    // const users = await User.findAll({
    //   attributes: {
    //     exclude: ['password']
    //   },
    //   where: {
    //     [Op.or]: [{ isMale: false }, { id: 1 }]
    //   }
    // });

    // SELECT id, fullName, email, isMale, ... as money FROM users
    // WHERE id < 5;
    const users = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      where: {
        id: {
          [Op.lt]: 5
        }
      }
    });

    res.send({ data: users });
  } catch (error) {
    next(error);
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const { params: { userId } } = req;

    // SELECT * FROM users WHERE id = userId;
    // const [user] = await User.findAll({
    //   where: {
    //   id: userId,
    //  }
    // });

    // SELECT * FROM users WHERE id = userId;
    // const user = await User.findOne({
    //   where: {
    //     id: userId,
    //   }
    // });

    // SELECT * FROM users WHERE id = userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return next(createHttpError(404, 'User not found'));
    }

    res.send({ data: user });
  } catch (error) {
    next(error)
  }
}

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { user: { id }, user } = req;

    // const user = await User.findByPk(userId);

    // DELETE FROM users WHERE id = userId;
    await User.destroy({
      where: {
        id
      }
    });

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
}

module.exports.deleteUserInstance = async (req, res, next) => {
  try {
    const { user } = req;

    await user.destroy();

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
}

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      body,
      user: { id }
    } = req;

    // UPDATE users SET ... WHERE id = userId
    const [updatedRows, [user]] = await User.update(body, {
      where: {
        id
      },
      returning: true
    });

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
}

module.exports.updateUserInstance = async (req, res, next) => {
  try {
    const {
      body,
      user
    } = req;

    const updatedUserInstance = await user.update(body);

    res.send({ data: updatedUserInstance });
  } catch (error) {
    next(error);
  }
}