const { sequelize, Sequelize } = require('../db/connection')

const Media = sequelize.define('media', {
    media_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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