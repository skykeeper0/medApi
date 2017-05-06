const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://skykeeper0@localhost:5432/mydb')

module.exports = sequelize;