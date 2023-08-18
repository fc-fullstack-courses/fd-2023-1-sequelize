'use strict';

function generateUser(key) {
  return {
    full_name: `User Name${key}`,
    email: `testmail${key}@mail.com`,
    password: `${key}_1234_user`,
    is_male: Math.random() > 0.5,
    created_at: new Date(),
    updated_at: new Date(),
  }
}

function generateUsers(amount) {
  const usersToCreate = amount > 500 ? 500 : amount;
  return new Array(usersToCreate).fill(null).map((__, index) => generateUser(index + 1))
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const futureUsers = generateUsers(100);

    await queryInterface.bulkInsert('users', futureUsers);
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
