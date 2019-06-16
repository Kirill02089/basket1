const assert = require('assert');
const app = require('../../src/app');

describe('\'game-results\' service', () => {
  it('registered the service', () => {
    const service = app.service('game-results');

    assert.ok(service, 'Registered the service');
  });
});
