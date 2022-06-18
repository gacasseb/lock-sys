const { Sequelize } = require('sequelize');
const database = require('../database/db');

const User = database.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        access_token: {
            type: Sequelize.STRING,
            allowNull: true
        },
    },
    {
        timestamps: true,
        createdAt: 'created_at'
    }
);

module.exports = User;