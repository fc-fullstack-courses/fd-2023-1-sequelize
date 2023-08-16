const userRouter = require('express').Router();
const UserController = require('../controllers/users.controller');

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);
userRouter.delete('/:userId', UserController.deleteUser);
userRouter.delete('/v2/:userId', UserController.deleteUserInstance);

module.exports = userRouter;