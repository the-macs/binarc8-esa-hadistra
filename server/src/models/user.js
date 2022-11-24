const Sequelize = require('sequelize')
const db = require('../config/database')

module.exports = db.define('users', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    amount_balance: {
        type: Sequelize.INTEGER,
        defaultValue: 100000
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    Sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    paranoid: false,
    createdAt: 'created_at',
    updatedAt: false,
    deletedAt: false,
    indexes: [
        {
            name: "users_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
})