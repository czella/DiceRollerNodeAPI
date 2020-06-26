let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
let testUnits = [
  {
    "name": "Test",
    "combat": "9",
    "modifier": "0",
    "count": "1"
  },
  {
    "name": "Test2",
    "combat": "9",
    "modifier": "0",
    "count": "1"
  },
  {
    "name": "Test3",
    "combat": "9",
    "modifier": "0",
    "count": "1"
  }
]

const end2EndTest = () => {

  describe('/GET smoketest', () => {
    it('it should GET app is running', (done) => {
      chai.request(server)
        .get('/test')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.test.should.equal("everything's fine");
          done();
        });
    });
  });

  describe('/POST roll/combined', () => {
    it('result of roll should have the same length', (done) => {
      chai.request(server)
        .post('/roll/combined')
        .send(testUnits)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(testUnits.length);
          done();
        });
    });
  });

  describe('/POST roll/combined', () => {
    it('result of roll should be between 1 and 10', (done) => {
      chai.request(server)
        .post('/roll/combined')
        .send(testUnits)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.forEach(unit => unit.rolls.forEach(roll => roll.should.satisfy(num => 1 <= num && num <= 10 ? true : 0)));
          done();
        });
    });
  });
};

module.exports = {
  end2EndTest,
};
