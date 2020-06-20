'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Units', {
      name: {
        type: Sequelize.STRING
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      combat: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UnitTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Units');
  }
};
