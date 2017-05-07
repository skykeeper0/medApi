const { Topic, Article, Media } = require('../models/models');
const apiMessages = require('./../shared/apiMessage');

// inject seed data into data base with test route
const testController = {
  injectSeededData: (req, res) => {
    Article.create({
      id: 1940,
      title: 'Mid night story',
      topic: [
        {id: 535, name: 'stories'},
        {id: 641, name: 'night'}
      ],
      media: [
        {id : 3, url:'https://love.com'}
      ]
    }).then((user) => {
        const ret = apiMessages.getResponseByCode(1);
        res.status(ret.status).json(ret);
    }).catch((err) => {
        console.log('This is an err: ' + err)
        res.status(500).end();
    })
  }
}

module.exports = testController;