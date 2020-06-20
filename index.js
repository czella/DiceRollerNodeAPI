const express = require('express');
const bodyParser = require('body-parser');
const queries = require('./queries');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/units', (request, response) => {
 return (queries.getUnits(request, response));
  // response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/unittypes', (request, response) => {
 return (queries.getUnitTypes(request, response));
  // response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
