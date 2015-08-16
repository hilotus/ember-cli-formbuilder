import Ember from 'ember';

export default Ember.Object.extend({
  name: null,  // unique
  description: null,
  displayName: null,
  required: false,
  wholeLine: false,

  // text, paragraph, date, time, singleChoice,
  // multipleChoice, price, number, email, link
  // section
  // ...
  type: null
});
