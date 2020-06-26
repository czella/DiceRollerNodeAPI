process.env.NODE_ENV = 'test';

const e2e = require('./e2e');
const unit = require('./unit');

e2e.end2EndTest();
unit.unitTests();

