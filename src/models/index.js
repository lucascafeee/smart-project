const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smart_project', 'user_smart_project', '12345678', {
  host: 'localhost',
  dialect: 'mysql'
});

const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, authenticateDB };
