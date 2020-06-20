'use strict';
module.exports = (sequelize, DataTypes) => {
  const UnitType = sequelize.define('UnitType', {
    name: DataTypes.STRING
  }, {});
  UnitType.associate = function(models) {
     UnitType.hasMany(models.Unit, {as: 'units'})
  };
  return UnitType;
};
