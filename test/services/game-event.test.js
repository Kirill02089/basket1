const assert = require('assert');
const app = require('../../src/app');

describe('\'gameEvent\' service', () => {
  it('registered the service', () => {
    const service = app.service('game-event');

    assert.ok(service, 'Registered the service');
  });
});
