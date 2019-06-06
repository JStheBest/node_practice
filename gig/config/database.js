

const Sequelize = require('sequelize');

module.exports =  new Sequelize('mysql', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  
});