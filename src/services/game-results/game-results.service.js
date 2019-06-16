// Initializes the `game-results` service on path `/game-results`
const createService = require('feathers-sequelize');
const createModel = require('../../models/game-results.model');
const hooks = require('./game-results.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/game-results', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('game-results');

  service.hooks(hooks);
};
