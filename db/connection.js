// const mongoose = require('mongoose')
// const conf = require('../shared/config')();
// // const sequelize = new Sequelize(`postgres://${conf.username}@${conf.host}:${conf.port}/${conf.database}`)
// var db;
// const url = `mongodb://@localhost:27017/med`;
// mongoose.connect(url, (err, database) => {
//   db = database;
// })
// var connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function() {
//   console.log('database connected')
// });

const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const conf = require('../shared/config')();
const url = 'mongodb://localhost:27017/med';

var connection = new Promise(function(resolve, reject) {
  //open connection to the server
  MongoClient.connect(url, (err, db) => {
    if (err) reject(Error(err));

    articles = db.collection("articles");
    topics = db.collection("topics");
    resolve({ articles, topics, db });
  })
});

module.exports = { connection };