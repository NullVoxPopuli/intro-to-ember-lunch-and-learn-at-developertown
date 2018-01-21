import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { withChai } from 'ember-cli-chai/qunit';

module('Acceptance | navigation', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting some the non-data-routes', withChai(async function(expect) {
    await visit('/some-route');

    expect(currentURL()).to.equal('/some-route');

    await visit('/some-route/sub-route-a')

    expect(currentURL()).to.equal('/some-route/sub-route-a');
  }));

  test('visiting some routes via clicking links', withChai(async function(expect) {
    await visit('/');

    expect(currentURL()).to.equal('/');

    await click('a.some-route')

    expect(currentURL()).to.equal('/some-route');

    await click('a.data-route')

    expect(currentURL()).to.equal('/data-route');

  }));

});
