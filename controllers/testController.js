const { Topic, Article, Media } = require('../models/models');
const apiMessages = require('./../shared/apiMessage');

// inject seed data into data base with test route
const testController = {
  injectSeededData: (req, res) => {
    Article.create({
      id: 1940,
      title: 'Mid night story',
      // topic: [
      //   {id: 535, name: 'stories'},
      //   {id: 641, name: 'night'}
      // ]
    }).then(article => {
        const temp_article = article
        article.createTopic({
          id: 535, name: 'stories'
        })
        article.createTopic({
            id: 123, name: 'night'
        }).then(article => {
            console.log('complete create seed data')
            const ret = apiMessages.getResponseByCode(1);
            res.status(ret.status).json(ret);
          })
    }).catch((err) => {
        console.log('This is an err: ' + err)
        res.status(500).end();
    })
  }
}

module.exports = testController;