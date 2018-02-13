import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // https://accountjsonapi.docs.apiary.io/#reference/admins/user-account-collection/list-all?console=1
  host: 'https://private-anon-240d0c9223-accountjsonapi.apiary-mock.com',

  headers: {
    'AUTHORIZATION': 'Bearer sessionid123'
  }
});
