const groupRouter = require('express').Router();
const groupController = require('../controllers/group.controller');

groupRouter.post('/', groupController.createGroup);

module.exports = groupRouter;