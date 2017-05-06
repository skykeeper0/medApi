const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://skykeeper0@localhost:5432/mydb')

// // test database connection
// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

module.exports = sequelize;