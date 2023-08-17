const { BaseError } = require('sequelize');

module.exports = async (err, req, res, next) => {
  console.log(err instanceof BaseError);
  if (err instanceof BaseError) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(409).send({
        errors: err.errors
      });
    }
  }

  next(err);
}