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
     return queryInterface.bulkInsert('usergames', [
      {
     id: '1',
     game_id: '1111',
     game_name:'pokemon',
     game_price:49,
     minutes_play:87,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     id: '2',
     game_id: '1111',
     game_name:'pokemon',
     game_price:49,
     minutes_play:122,
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
