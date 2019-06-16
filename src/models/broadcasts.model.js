// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const broadcasts = sequelizeClient.define('broadcasts', {
    game_start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    game_end_time: {
      type: DataTypes.TIME,
    },

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  broadcasts.associate = function (models) {
    broadcasts.hasMany(models.teams);
    broadcasts.hasMany(models.game_events);
    broadcasts.hasMany(models.game_result);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return broadcasts;
};
