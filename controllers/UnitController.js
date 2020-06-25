const { Unit } = require('../models');
const UnitService = require('../services/UnitService').UnitService;
const unitService = new UnitService(Unit);

const getUnits = async (request, response) => {
  return response.status(200).json(await unitService.getUnits());
};

module.exports = {
  getUnits: getUnits,
};
