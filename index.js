const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');
const RollService = require('./services/RollService').RollService;
const rollService = new RollService();
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

app.get('/units', (request, response) => {
 return (queries.getUnits(request, response));
})

app.get('/unittypes', (request, response) => {
 return (queries.getUnitTypes(request, response));
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
