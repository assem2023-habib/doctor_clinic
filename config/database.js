const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('beauty_center', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection to MySQL has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = { sequelize };
