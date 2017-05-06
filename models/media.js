const sequelize = require('../db/connection')

const Media = sequelize.define('media', {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    thumbnailUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mimeType: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Media;