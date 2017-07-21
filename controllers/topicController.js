// Application modules.
const apiMessages = require('../shared/apiMessage');
const { connection } = require('../db/connection');
var topics;
var db;

connection.then( obj => {
  topics = obj.topics;
  db = obj.db;
})

// The controller itself.
const topicController = {
  getAll: (req, res) => {
    topics.find().toArray( (err, data) => {
      const ret = apiMessages.getResponseByCode(1000);
      ret.data = data
      res.status(ret.status).json(ret);
    })
  },
};

module.exports = topicController;
