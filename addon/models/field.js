import Ember from 'ember';
import Serializable from 'ember-cli-formbuilder/mixins/serializable';

export default Ember.Object.extend(Serializable, {
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
