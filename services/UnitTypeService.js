class UnitTypeService {
  constructor(Unit, UnitType) {
    this.Unit = Unit;
    this.UnitType = UnitType;
  }
  async getUnitTypes(){
    return this.UnitType.findAll({
      include: [ {model: this.Unit, as: 'units', order: "createdAt ASC"} ],
      raw: false,
      // order: [[{model: Unit, as: "units"}, 'createdAt', 'desc']]
    });
  }
}

module.exports = {
  UnitTypeService: UnitTypeService,
}
