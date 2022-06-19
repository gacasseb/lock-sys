const { Sequelize } = require('sequelize');
const database = require('../database/db');
const user = require('./user');

const Device = database.define('device', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        code: {
            type: Sequelize.INTEGER,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

module.exports = Device;