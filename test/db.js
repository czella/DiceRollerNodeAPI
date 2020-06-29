process.env.NODE_ENV = 'test';
const { UnitType, Unit } = require('../models');
let chai = require('chai');
let should = chai.should();

const dbTest = () => {
  let result;
  before(async () => {
    const testType = await UnitType.create({name: 'Test'});
    await Unit.create({
      name: 'Test unit',
      id: 'testunit',
      combat: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      UnitTypeId: testType.id,
    });
    result = await UnitType.findAll({
      include: [ {model: Unit, as: 'units', order: "createdAt ASC"} ],
      raw: false,
      order: [[{model: Unit, as: "units"}, 'createdAt', 'desc']]
    });
  })
  describe('unitType db test', () => {
    it('should create a unitType', (done) => {
      result.should.be.a('array');
      result.length.should.be.eql(1);
      done();
    });
  });

  describe('unitType db test', () => {
    it('unitType should have one unit', (done) => {
      result[0].units.should.be.a('array');
      result[0].units.length.should.be.eql(1);
      done();
    });
  });
  after(async () => {
    await UnitType.destroy({ truncate: true })
    await Unit.destroy({ truncate: true })
  })
}

module.exports = {
  dbTest,
}
