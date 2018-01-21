import Ember from 'ember';
import DS from 'ember-data';

import { underscore } from '@ember/string';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'https://aeonvera.com',

  pathForType: function(type) {
    const underscored = underscore(type);

    return Ember.String.pluralize(underscored);
  }
});
