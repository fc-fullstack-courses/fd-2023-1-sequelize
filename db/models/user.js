'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: 'userId'
      });

      User.belongsToMany(models.Group, {
        through: 'users_to_groups',
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING(100),
      field: 'full_name',
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        // is: /^[A-Z][a-z]{0,32}( [A-Z][a-z]{0,32})?$/
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    isMale: {
      type: DataTypes.BOOLEAN,
      field: 'is_male'
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    bonusAmount: {
      type: DataTypes.DECIMAL(9, 2),
      field: 'bonus_amount',
      validate: {
        isNumeric: true,
        min: 0
      }
      // defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
  });
  return User;
};