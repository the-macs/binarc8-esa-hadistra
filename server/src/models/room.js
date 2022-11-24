const Sequelize = require('sequelize')
const db = require('../config/database')

module.exports = db.define('rooms', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    Sequelize,
    tableName: 'rooms',
    schema: 'public',
    timestamps: false,
    paranoid: false,
    indexes: [
        {
            name: "rooms_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
})