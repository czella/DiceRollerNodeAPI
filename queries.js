const Pool = require('pg').Pool
const { UnitType, Unit } = require('./models');
const pool = new Pool({
  user: 'laci',
    host: 'localhost',
  database: 'laci',
  password: 'lacika',
  port: 5432,
});

const getUnits = async (request, response) => {
  const result = await Unit.findAll({});
  return await response.status(200).json(result);
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
