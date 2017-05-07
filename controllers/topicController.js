// Application modules.
const apiMessages = require('../shared/apiMessage');
const { Topic } = require('./../models/models');

// The controller itself.
const topicController = {
  getAll: (req, res) => {
    Topic.findAll({})
      .then(users => {
        const ret = apiMessages.getResponseByCode(1000);
        ret.data = users
        res.status(ret.status).json(ret);
      })
  },

  getOne: (req, res) => {
    Topic.findOne({
      where: {
        id: req.params.id
      }
    }).then(users => {
        const ret = apiMessages.getResponseByCode(1000);
        ret.data = users
        res.status(ret.status).json(ret);
    })
  }
};

module.exports = topicController;
