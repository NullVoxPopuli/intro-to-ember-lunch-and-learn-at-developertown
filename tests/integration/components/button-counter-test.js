import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { withChai } from 'ember-cli-chai/qunit';


module('Integration | Component | button counter', function(hooks) {
  setupRenderingTest(hooks);

  test('calculates the power', withChai(async function(expect) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    await render(hbs`{{button-counter number=3 power=3}}`);

    const text = this.$().text().trim();

    expect(text).to.contain('27');
  }));

  test('renders the number', withChai(async function(expect) {
    await render(hbs`{{button-counter number=3}}`);

    const text = this.$().text().trim();

    expect(text).to.contain('3');
  }));

  test('renders the power', withChai(async function(expect) {
    await render(hbs`{{button-counter power=5}}`);

    const text = this.$().text().trim();

    expect(text).to.contain('5');
  }));

});
