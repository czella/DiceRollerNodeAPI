'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UnitTypes', [
      {
      name: 'Fighter',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Infantry',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Destroyer',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Carrier',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Cruiser',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Dreadnought',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Warsun',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Flagship',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Space Cannon',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);

     const types = await queryInterface.sequelize.query(
      `SELECT id from "UnitTypes";`
    );
    const rows = types[0];
    return queryInterface.bulkInsert('Units', [
      {
      name: 'Naalu Fighter II',
      id: 'naalufighter2',
      combat: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[0].id,
      },
      {
        name: 'Naalu Fighter',
        id: 'naalufighter',
        combat: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[0].id,
      },
      {
        name: 'Fighter II',
        id: 'fighter2',
        combat: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[0].id,
      },
      {
        name: 'Fighter I',
        id: 'fighter',
        combat: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[0].id,
      },
      {
      name: 'Sol Infantry II',
      id: 'solinfantry2',
      combat: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[1].id,
      },
      {
        name: 'Sol Infantry',
        id: 'solinfantry',
        combat: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[1].id,
      },
      {
        name: 'Infantry II',
        id: 'infantry2',
        combat: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[1].id,
      },
      {
        name: 'Infantry I',
        id: 'infantry',
        combat: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[1].id,
      },
      {
      name: 'Destroyer II',
      id: 'destroyer2',
      combat: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[2].id,
      },
      {
        name: 'Destroyer',
        id: 'destroyer',
        combat: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[2].id,
      },
      {
      name: 'Carrier',
      id: 'carrier',
      combat: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[3].id,
      },
      {
      name: 'Cruiser II',
      id: 'cruiser2',
      combat: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[4].id,
      },
      {
        name: 'Cruiser I',
        id: 'cruiser',
        combat: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[4].id,
      },
      {
      name: 'L1z1x Dreadnought II',
      id: 'l1z1xdread2',
      combat: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[5].id,
      },
      {
        name: 'Dreadnought',
        id: 'dread',
        combat: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        UnitTypeId: rows[5].id,
      },
      {
      name: 'Warsun',
      id: 'warsun',
      combat: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: rows[6].id,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Units', null, {});
    await queryInterface.bulkDelete('UnitTypes', null, {});
  }
};
