const RollService = require('../services/RollService').RollService;
const rollService = new RollService();

const getCombinedRoll = (request, response) => {
  const units = request.body;
  const results = rollService.rollForUnits(units);
  return response.status(200).json(results);
};

module.exports = {
  getCombinedRoll,
}
