const { sequelize, Sequelize } = require('../db/connection')

const Media = sequelize.define('media', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    // type: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // thumbnailUrl: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    // mimeType: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // }
}, {
    underscored: true
});

module.exports = Media;