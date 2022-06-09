const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lock-sys', 'root', 'root', {
    host: 'mysqldb',
    dialect: 'mysql'
});

module.exports = sequelize;