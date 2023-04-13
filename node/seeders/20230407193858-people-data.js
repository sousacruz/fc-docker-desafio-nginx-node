'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('People', [
      {
        name: 'Maria Luiza',
        actived: true,
        email: 'malu@mail.com',
        role: 'TW',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        name: 'Giulia Borges',
        actived: true,
        email: 'giulia@mail.com',
        role: 'TW',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        name: 'Vinicius Leão',
        actived: true,
        email: 'vinny@mail.com',
        role: 'DevOps',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        name: 'Matheus Mazzoni',
        actived: true,
        email: 'mazzoni@mail.com',
        role: 'DevOps',
        createdAt: new Date(),
        updatedAT: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
