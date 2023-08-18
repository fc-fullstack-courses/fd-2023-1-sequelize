'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_to_groups', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'group_id',
        primaryKey: true,
        references: {
          model: 'groups',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users_to_groups');
  }
};
