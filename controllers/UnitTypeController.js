const { Unit, UnitType } = require('../models');
const UnitTypeService = require('../services/UnitTypeService').UnitTypeService;
const unitTypeService = new UnitTypeService(Unit, UnitType);

const getUnitTypes = async (request, response) => {
  return response.status(200).json(await unitTypeService.getUnitTypes());
};

module.exports = {
  getUnitTypes,
};
