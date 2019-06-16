const assert = require('assert');
const app = require('../../src/app');

describe('\'gameEventTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('game-event-types');

    assert.ok(service, 'Registered the service');
  });
});
