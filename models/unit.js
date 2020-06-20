'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    name: DataTypes.STRING,
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    combat: DataTypes.INTEGER,
    UnitTypeId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Unit.associate = function(models) {
    Unit.belongsTo(models.UnitType)
  };
  return Unit;
};
