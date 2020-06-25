const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const {getRoutes} = require('./routers/index');
const app = express();
const port = 8080;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://czella.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://diceroller',
  issuer: 'https://czella.eu.auth0.com/',
  algorithms: ['RS256']
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(helmet());

getRoutes(app, jwtCheck);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;
