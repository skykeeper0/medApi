const { Topic, Article, Media, ArticleTopic } = require('../models/models');
const apiMessages = require('./../shared/apiMessage');

// inject seed data into data base with test route
const testController = {
  injectSeededData: (req, res) => {
    Article.create(
      {
        id: 1940,
        title: 'Mid night story',
        media: [
          {
            id: 5,
            url: 'asdsad'
          }
        ],
        topics: [
          {
            id: 535, name: 'stories'
          },{
            id: 55, name: 'night'
          }
        ]
      }
    , {
      include: [ Media, Topic ]
    }).then(err => {
        Article.create(
        {
          id: 230,
          title: 'Morning story',
          media: [
            {
              id: 6,
              url: 'asd2345'
            }
          ],
          topics: [
            {
              id: 535, name: 'stories'
            },{
              id: 52345, name: 'morning'
            }
          ]
        }
      , {
        include: [ Media, Topic ]
      }).then(err => {
        console.log('completed creating seed data')
        const ret = apiMessages.getResponseByCode(1002);
        res.status(ret.status).json(ret);
      })
    }).catch((err) => {
        console.log('This is an err: ' + err)
        res.status(500).end();
    })
  }
}


module.exports = testController;