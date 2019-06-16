// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const players = sequelizeClient.define('players', {
    role: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    kpd: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    fio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
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
  players.associate = function (models) {
    players.belongsTo(models.Teams)
  };

  return players;
};
