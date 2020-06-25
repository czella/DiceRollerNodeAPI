const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const RollService = require('./services/RollService').RollService;
const UnitService = require('./services/UnitService').UnitService;
const UnitTypeService = require('./services/UnitTypeService').UnitTypeService;
const rollService = new RollService();
const unitService = new UnitService();
const unitTypeService = new UnitTypeService();
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/test', (request, response) => {
  return  response.status(200).json({test: 'everything fine'});
});

app.get('/units',async (request, response) => {
 return response.status(200).json(await unitService.getUnits());
})

app.get('/unittypes',async (request, response) => {
  return response.status(200).json(await unitTypeService.getUnitTypes());
})

app.post('/roll/combined', (request, response) => {
  const units = request.body;
  const results = rollService.rollForUnits(units);
  return response.status(200).json(results);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;
