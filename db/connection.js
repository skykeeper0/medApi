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
    resolve({ articles, topics });
  })
});

module.exports = { connection };