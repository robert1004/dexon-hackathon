const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'robert', '1234', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 90,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: '../database.sqlite3'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.writers = require('../model/writer.model.js')(sequelize, Sequelize);

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
module.exports.db = db;