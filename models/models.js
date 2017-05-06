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

sequelize.sync({
    // force:true
});


module.exports = Models