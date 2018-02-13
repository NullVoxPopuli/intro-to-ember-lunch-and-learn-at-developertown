import Ember from 'ember';
import DS from 'ember-data';

import { underscore } from '@ember/string';

export default DS.JSONAPIAdapter.extend({
  // namespace: 'api',
  // https://accountjsonapi.docs.apiary.io/#reference/admins/user-account-collection/list-all?console=1
  host: 'https://private-anon-240d0c9223-accountjsonapi.apiary-mock.com',
  headers: {
    'AUTHORIZATION': 'Bearer sessionid123'
  }
  // pathForType: function(type) {
  //   const underscored = underscore(type);
  //
  //   return Ember.String.pluralize(underscored);
  // }
});
