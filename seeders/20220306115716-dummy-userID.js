'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     queryInterface.bulkInsert('Users', [
      {
      userID: '1',
      email: 'andrew@binar.com',
      password: 'password1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: '2',
      email: 'bayu@binar.com',
      password: 'password2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
