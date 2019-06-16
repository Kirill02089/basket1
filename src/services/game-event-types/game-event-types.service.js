// Initializes the `gameEventTypes` service on path `/game-event-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/game-event-types.model');
const hooks = require('./game-event-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/game-event-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('game-event-types');

  service.hooks(hooks);
};
