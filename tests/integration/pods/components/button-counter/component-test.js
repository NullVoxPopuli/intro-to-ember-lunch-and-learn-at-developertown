import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { withChai } from 'ember-cli-chai/qunit';

moduleForComponent('button-counter', 'Integration | Component | button counter', {
  integration: true
});

test('calculates the power', withChai(function(expect) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{button-counter number=3 power=3}}`);

  const text = this.$().text().trim();

  expect(text).to.contain('27');
}));

test('renders the number', withChai(function(expect) {
  this.render(hbs`{{button-counter number=3}}`);

  const text = this.$().text().trim();

  expect(text).to.contain('3');
}));

test('renders the power', withChai(function(expect) {
  this.render(hbs`{{button-counter power=5}}`);

  const text = this.$().text().trim();

  expect(text).to.contain('5');
}));
