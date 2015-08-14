import Ember from 'ember';

var Field = Ember.Object.extend({
  // unique
  name: null,

  displayName: null,

  // text, date, time, checkbox,
  // website, price, number, email
  // ...
  type: 'text'
});

Field.reopenClass({
  generate: function(fieldType) {
    return this.create({type: fieldType});
  }
})
