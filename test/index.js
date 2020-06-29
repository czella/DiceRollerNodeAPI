process.env.NODE_ENV = 'test';
console.log(process.env.NODE_ENV, 'PROCESS....MIBREMTH.-------------');


const e2e = require('./e2e');
const unit = require('./unit');
const db = require('./db');

e2e.end2EndTest();
unit.unitTests();
db.dbTest();

