const { Unit } = require('../models');

class UnitService {
  async getUnits(){
    return Unit.findAll({});
  }
}

module.exports = {
  UnitService: UnitService,
}
