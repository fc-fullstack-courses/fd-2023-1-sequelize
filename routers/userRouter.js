const userRouter = require('express').Router();
const UserController = require('../controllers/users.controller');
const { paginate } = require('../middlewares/common.mv');
const { findUser } = require('../middlewares/users.mv');
const taskRouter = require('./taskRouter');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginate, UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);
userRouter.delete('/:userId', findUser, UserController.deleteUser);
userRouter.delete('/v2/:userId', findUser, UserController.deleteUserInstance);
userRouter.put('/:userId', findUser, UserController.updateUser);
userRouter.put('/v2/:userId', findUser, UserController.updateUserInstance);

userRouter.use('/:userId/tasks', findUser, taskRouter);

module.exports = userRouter;