// Initializes the `broadcasts` service on path `/broadcasts`
const createService = require('feathers-sequelize');
const createModel = require('../../models/broadcasts.model');
const hooks = require('./broadcasts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/broadcasts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('broadcasts');

  service.hooks(hooks);
};
