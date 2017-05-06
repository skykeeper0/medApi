const sequelize = require('../db/connection')

const Article = sequelize.define('article', {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    id: {
        type: Sequelize.INTEGER,
    },
    createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    likesCount: {
        type: Sequelize.STRING,
    },
    media: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Article;