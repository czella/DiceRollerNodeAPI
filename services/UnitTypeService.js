const { UnitType, Unit } = require('../models');

class UnitTypeService {
  async getUnitTypes(){
    return UnitType.findAll({
      include: [ {model: Unit, as: 'units', order: "createdAt ASC"} ],
      raw: false,
      // order: [[{model: Unit, as: "units"}, 'createdAt', 'desc']]
    });
  }
}

module.exports = {
  UnitTypeService: UnitTypeService,
}
