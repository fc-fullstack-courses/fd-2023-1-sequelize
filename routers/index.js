const router = require('express').Router();
const userRouter = require('./userRouter');
const groupRouter = require('./groupRouter');

router.use('/users', userRouter);
router.use('/groups', groupRouter);

module.exports = router;