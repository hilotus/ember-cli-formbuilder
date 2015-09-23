import Ember from 'ember';
import ModelTypeMixin from 'ember-cli-formbuilder/mixins/model-type';

export default Ember.Component.extend(ModelTypeMixin, {
  classNames: ['form-builder-edit-field-wrapper'],

  model: null,
  targetObject: null
});
