const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const teams = require('./teams/teams.service.js');
const players = require('./players/players.service.js');
const gameEventTypes = require('./game-event-types/game-event-types.service.js');
const gameEvent = require('./game-event/game-event.service.js');
const test = require('./test/test.service.js');
const players = require('./players/players.service.js');
const teams = require('./teams/teams.service.js');
const gameEvents = require('./game-events/game-events.service.js');
const gameEventTypes = require('./game-event-types/game-event-types.service.js');
const broadcasts = require('./broadcasts/broadcasts.service.js');
const gameResults = require('./game-results/game-results.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(messages);
  app.configure(users);
  app.configure(teams);
  app.configure(players);
  app.configure(gameEventTypes);
  app.configure(gameEvent);
  app.configure(test);
  app.configure(players);
  app.configure(teams);
  app.configure(gameEvents);
  app.configure(gameEventTypes);
  app.configure(broadcasts);
  app.configure(gameResults);
};
