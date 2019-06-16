// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const gameResults = sequelizeClient.define('game_results', {
    score_team1: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    score_team2: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  gameResults.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return gameResults;
};
