// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const gameEvents = sequelizeClient.define('game_events', {
    time: {
      type: DataTypes.TIME,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  gameEvents.associate = function (models) {
    gameEvents.belongsTo(models.players);
    gameEvents.belongsTo(models.game_event_types);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return gameEvents;
};
