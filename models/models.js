const { sequelize, Sequelize } = require('../db/connection')

const Topic = require('./topic')
const Article = require('./article')
const Media = require('./media')

// Article can have many media, each media can only have one article
// Models.Article.hasMany(Models.Media);


const ArticleTopic = sequelize.define('articletopic', {
    article_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    topic_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
});

// Article can have many topic and topic can associate with many article
Article.belongsToMany(Topic, { through: ArticleTopic , foreignKey: 'article_id' });
Topic.belongsToMany(Article, { through: ArticleTopic , foreignKey: 'topic_id '});

sequelize.sync({
    force:true
});


module.exports = { Topic, Article, Media, ArticleTopic }