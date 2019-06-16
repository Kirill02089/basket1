const assert = require('assert');
const app = require('../../src/app');

describe('\'gameEvents\' service', () => {
  it('registered the service', () => {
    const service = app.service('game-events');

    assert.ok(service, 'Registered the service');
  });
});
