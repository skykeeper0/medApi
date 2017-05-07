const { sequelize, Sequelize } = require('../db/connection')

const Topic = sequelize.define('topic', {
    // topic_id: {
    //   type: Sequelize.UUID,
    //   defaultValue: Sequelize.UUIDV4,
    //   allowNull: false
    // },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // description: {
    //     type: Sequelize.STRING,
    //     allowNull: true,
    // },
}, {
    underscored: true
});

module.exports = Topic;