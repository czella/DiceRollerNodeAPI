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
  // pool.query('SELECT * FROM "Units" ORDER BY id ASC', (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).json(results.rows)
  // })
  const result = await Unit.findAll({});
  return await response.status(200).json(result);
}

const getUnitTypes = async (request, response) => {
  // pool.query('SELECT * FROM "Units" ORDER BY id ASC', (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).json(results.rows)
  // })
  const result = await UnitType.findAll({
      include: [ {model: Unit, as: 'units'} ],
      raw: false // returns result-set as sequelize object...
  });
  return response.status(200).json(result);
}

module.exports = {
  getUnits,
  getUnitTypes,
};
