const groupRouter = require('express').Router();
const groupController = require('../controllers/group.controller');
const { paginate } = require('../middlewares/common.mv');

groupRouter.post('/', groupController.createGroup);
groupRouter.get('/', paginate, groupController.getGroups);

module.exports = groupRouter;