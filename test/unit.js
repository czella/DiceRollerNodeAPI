const sinon = require('sinon');
const RollService = require('../services/RollService').RollService;
let chai = require('chai');
let should = chai.should();

const unitTests = () => {

  describe('rollForUnits test', () => {
    it('it should call getResult method for each array element', (done) => {
      const rollService = new RollService();
      const rs = sinon.mock(rollService);
      rs.expects('getResult').atLeast(2);
      rollService.rollForUnits(['test1', 'test2']);
      rs.verify();
      done();
    });
  });

  describe('getRolls test', () => {
    it('every roll should be between 1 and 10', (done) => {
      const rollService = new RollService();
      const rolls = rollService.getRolls(5);
      rolls.forEach(roll => roll.should.satisfy(num => 1 <= num && num <= 10 ? true : 0))
      done();
    });
  });

  describe('getHits test', () => {
    it('should return 2 hits', (done) => {
      const rollService = new RollService();
      const hits = rollService.getHits(['1', '2', '3'], '1', '3', '10');
      hits.should.be.eql(2);
      done();
    });
  });

  describe('getResult test', () => {
    it('every result should have a rolls array and a hit', (done) => {
      const rollService = new RollService();
      const test = {
        "name": "Test3",
        "combat": "9",
        "modifier": "0",
        "count": "4"
      }
      const result = rollService.getResult(test);
      result.should.be.a('object');
      result.rolls.should.be.a('array');
      result.rolls.length.should.be.eql(Number(test.count));
      result.hits.should.satisfy(num => 0 <= num && num <= Number(test.count) ? true : 0);
      result.rolls.forEach(roll => roll.should.satisfy(num => 1 <= num && num <= 10 ? true : 0))
      done();
    });
  });
};

module.exports = {
  unitTests,
};
