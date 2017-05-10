// Application modules.
const apiMessages = require('../shared/apiMessage');
const { Article } = require('./../models/models');

// The controller itself.
const articleController
 = {
  getAll: (req, res) => {
    Article.findAll({})
      .then(users => {
        const ret = apiMessages.getResponseByCode(1000);
        ret.data = users
        res.status(ret.status).json(ret);
      })
  },

  getOne: (req, res) => {
    Article.findOne({
      where: {
        id: req.params.id
      }
    }).then(users => {
        const ret = apiMessages.getResponseByCode(1000);
        ret.data = users
        res.status(ret.status).json(ret);
    })
  },

  addOne: (req, res) => {
    const article = {
      id: req.body.id,
      title: req.body.title,
      media: [],
      topics: [],
    }

    Article.create(article, {include: Media, Topic})
      .then(users => {
        const ret = apiMessages.getResponseByCode(1000);
        ret.data = users
        res.status(ret.status).jso
      })
  }
};

module.exports = articleController;
