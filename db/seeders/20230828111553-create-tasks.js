'use strict';
const { User, sequelize, Sequelize: { QueryTypes } } = require('../models');

function generateTask({ userId, key }) {
  return {
    user_id: userId,
    body: `Task number ${key}`,
    is_done: false,
    created_at: new Date(),
    updated_at: new Date(),
  }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // const users = await User.findAll({
    //   attributes: ['id']
    // });

    // const userId = users[0].id;

    const users = await sequelize.query('SELECT id FROM users', {
      type: QueryTypes.SELECT
    });

    const userId = users[1].id;

    await queryInterface.bulkInsert('tasks', [
      generateTask({ key: 11, userId })
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
