const { UnitType, Unit } = require('./models');

const getUnits = async (request, response) => {
  const result = await Unit.findAll({});
  return result;
}

const getUnitTypes = async (request, response) => {
  const result = await UnitType.findAll({
      include: [ {model: Unit, as: 'units', order: "createdAt ASC"} ],
      raw: false,
      // order: [[{model: Unit, as: "units"}, 'createdAt', 'desc']]
  });
  return response.status(200).json(result);
}

module.exports = {
  getUnits,
  getUnitTypes,
};
