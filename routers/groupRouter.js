const groupRouter = require('express').Router();
const groupController = require('../controllers/group.controller');
const { paginate } = require('../middlewares/common.mv');
const { findUser } = require('../middlewares/users.mv');

groupRouter.post('/', groupController.createGroup);
groupRouter.get('/', paginate, groupController.getGroups);

groupRouter.post('/:groupId/users/:userId', findUser, groupController.addUserToGroup);

module.exports = groupRouter;