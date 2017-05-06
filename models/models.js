const sequelize = require('../db/connection')
const Models = {}

Models.Topic = require('./topic')
Models.Article = require('./article')
Models.Media = require('./media')

// Models.Topic.belongsTo(Models.Article);
// You only need topics of article, not article associtaed with topic.
Models.Article.hasMany(Models.Topic);

Models.Media.belongsTo(Models.Article);
Models.Article.hasMany(Models.Media);

// Article can have many media, each media can only have one article


// Article can have many topic and topic can associate with many article
Models.Article.hasMany(Models.Topic);

sequelize.sync({
    // force:true
});


module.exports = Models