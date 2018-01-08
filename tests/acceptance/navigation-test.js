import { test } from 'qunit';
import moduleForAcceptance from 'ember-intro/tests/helpers/module-for-acceptance';
import { withChai } from 'ember-cli-chai/qunit';

moduleForAcceptance('Acceptance | navigation');

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
