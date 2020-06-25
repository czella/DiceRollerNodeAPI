class UnitService {
  constructor(Unit) {
    this.Unit = Unit;
  }
  async getUnits(){
    return this.Unit.findAll({});
  }
}

module.exports = {
  UnitService: UnitService,
}
