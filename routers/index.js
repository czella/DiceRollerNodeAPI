const rollController = require('../controllers/RollController');
const unitController = require('../controllers/UnitController');
const unitTypeController = require('../controllers/UnitTypeController');

const getRoutes = (app, jwtCheck) => {
  app.get('/test', (request, response) => {
    return  response.status(200).json({test: "everything's fine"});
  });

  app.get('/unittypes', unitTypeController.getUnitTypes);

  // app.use(jwtCheck);
  app.get('/units', unitController.getUnits);

  app.post('/getResult/combined', rollController.getCombinedRoll);
};

module.exports = {
  getRoutes: getRoutes,
}
