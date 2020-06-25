process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET smoketest', () => {
  it('it should GET app is running', (done) => {
    chai.request(server)
      .get('/test')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('/POST roll', () => {
  it('it should POST a roll', (done) => {
    let units = [
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
    chai.request(server)
      .post('/roll/combined')
      .send(units)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(units.length);
        done();
      });
  });
});
