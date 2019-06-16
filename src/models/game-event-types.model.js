// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const gameEventTypes = sequelizeClient.define('game_event_types', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short_title: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  gameEventTypes.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return gameEventTypes;
};
