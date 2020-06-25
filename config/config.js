//{
//  "development": {
//    "username": "laci",
//    "password": "lacika",
//    "database": "laci",
//    "host": "localhost",
//    "dialect": "postgres"
//  },
//  "test": {
//    "username": "root",
//    "password": null,
//    "database": "database_test",
//    "host": "127.0.0.1",
//    "dialect": "mysql"
//  },
//  "production": {
//    "username": "root",
//    "password": null,
//    "database": "database_production",
//    "host": "127.0.0.1",
//    "dialect": "mysql"
//  }
//}

const dbDetails = {
  "test": {
    "username": "laci",
    "password": "lacika",
    "database": "laci",
    "host": "localhost",
    "dialect": "postgres"
  },
  "development": {
    "username": "laci",
    "password": "lacika",
    "database": "laci",
    "host": "localhost",
    "dialect": "postgres"
  },

}
//
// module.exports = {
//   development: dbDetails,
// }
module.exports = dbDetails;
