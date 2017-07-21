// Application modules.
const apiMessages = require('../shared/apiMessage');
const { connection } = require('../db/connection');
var articles;
var db;

connection.then( obj => {
  articles = obj.articles;
  db = obj.db;
})

const articleController = {
  getAll: (req, res) => {
    articles.find().toArray( (err, data) => {
      const ret = apiMessages.getResponseByCode(1000);
      ret.data = data
      res.status(ret.status).json(ret);
    })

  },

  getOne: (req, res) => {
    articles.find({ 'id': Number(req.params.id)}).toArray( (err, data) => {
      console.log(data)
      const ret = apiMessages.getResponseByCode(1000);
      ret.data = data
      res.status(ret.status).json(ret);
    })
  },
};

module.exports = articleController;
