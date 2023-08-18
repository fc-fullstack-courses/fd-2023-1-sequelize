const createHttpError = require('http-errors');
const { Group, User } = require('../db/models');

module.exports.createGroup = async (req, res, next) => {
  try {
    const { body: { userId, ...body } } = req;

    const groupAuthor = await User.findByPk(userId);

    if (!groupAuthor) {
      return next(createHttpError(404, 'User not found'));
    }

    const group = await Group.create(body);

    await group.addUser(groupAuthor);

    res.status(201).send({ data: group });
  } catch (error) {
    next(error);
  }
}

module.exports.getGroups = async (req, res, next) => {
  try {
    const { pagination } = req;

    // LEFT JOIN example
    // const groups = await Group.findAll({
    //   ...pagination,
    //   include: User
    // });

    // INNER JOIN example
    const groups = await Group.findAll({
      ...pagination,
      include: [{
        model: User,
        // right: true для RIGHT JOIN
        required: true,
        attributes: ['id', 'fullName'],
        through: {
          attributes: []
        }
      }]
    });

    res.send({ data: groups });
  } catch (error) {
    next(error);
  }
}