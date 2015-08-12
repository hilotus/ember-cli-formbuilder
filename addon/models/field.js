import Ember from 'ember';

export default Ember.Object.extend({
  // unique
  name: null,

  displayName: null,

  // text, date, time, checkbox,
  // website, price, number, email
  // ...
  type: 'text'
});
