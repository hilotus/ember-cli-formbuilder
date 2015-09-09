import Ember from 'ember';
import Serializable from 'ember-cli-formbuilder/mixins/serializable';

export default Ember.Object.extend(Serializable, {
  name: null,
  description: null,
  fields: []
});
