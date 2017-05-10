const { sequelize, Sequelize } = require('../db/connection')
const Topic = require('./topic')
const Article = require('./article')
const Media = require('./media')

// Article can have many media, each media can only have one article
// Article.hasMany(Media, {foreignKey: 'article_id'});
Article.hasMany(Media)
// Media.belongsTo(Article, {foreignKey: 'article_id'});


const ArticleTopic = sequelize.define('articletopic', {

});

// Article can have many topic and topic can associate with many article
// Article.belongsToMany(Topic, { through: ArticleTopic , foreignKey: 'article_row_id', otherKey:'topic_row_id ' });
// Topic.belongsToMany(Article, { through: ArticleTopic , foreignKey: 'topic_row_id ', otherKey: 'article_row_id'});
Article.belongsToMany( Topic, {through: ArticleTopic});
Topic.belongsToMany( Article, {through: ArticleTopic});

sequelize.sync({
    force:true
});


module.exports = { Topic, Article, Media, ArticleTopic }