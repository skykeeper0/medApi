const { sequelize, Sequelize } = require('../db/connection')

const Article = sequelize.define('article', {
    // article_id: {
    //   type: Sequelize.UUID,
    //   primaryKey: true,
    //   defaultValue: Sequelize.UUIDV4,
    //   allowNull: false
    // },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    // createdAt: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    // updatedAt: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // slug: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    // summary: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    // url: {
    //     type: Sequelize.STRING
    // },
    // topic: {
    //     type: Sequelize.ARRAY(Sequelize.JSON),
    //     allowNull: true,
    // },
    // likesCount: {
    //     type: Sequelize.STRING,
    // },
    // medias: {
    //     type: Sequelize.ARRAY(Sequelize.JSON),
    //     allowNull: true
    // }, 
}, {
    underscored: true
});

module.exports = Article;