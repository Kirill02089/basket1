// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teams = sequelizeClient.define('teams', {
    title: {
      type: DataTypes.STRING,
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
  teams.associate = function (models) {
    teams.hasMany(models.players)
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return teams;
};
