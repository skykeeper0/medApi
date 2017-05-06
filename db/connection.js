const Sequelize = require('sequelize');
const conf = require('../shared/config')();

const sequelize = new Sequelize(`postgres://${conf.username}@${conf.host}:${conf.port}/${conf.database}`)

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