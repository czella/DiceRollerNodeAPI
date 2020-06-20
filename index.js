const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');
const rollService = require('./rollService');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/units', (request, response) => {
 return (queries.getUnits(request, response));
})

app.get('/unittypes', (request, response) => {
 return (queries.getUnitTypes(request, response));
})

app.post('/roll/combined', (request, response) => {
  return rollService.rollForUnits(request.body, response);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
