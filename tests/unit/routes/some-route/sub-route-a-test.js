import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | some route/sub route a', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:some-route/sub-route-a');
    assert.ok(route);
  });
});
