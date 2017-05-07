const sequelize = require('../db/connection')
const Models = {}

Models.Topic = require('./topic')
Models.Article = require('./article')
Models.Media = require('./media')

// Article can have many media, each media can only have one article
Models.Article.hasMany(Models.Media);


// Article can have many topic and topic can associate with many article
Models.Article.hasMany(Models.Topic, { through: ArticleTopic });
Models.Topic.hasMany(Models.Article, { through: ArticleTopic });

sequelize.sync({
    // force:true
});


module.exports = Models