import Ember from 'ember';
import ModelTypeMixin from 'ember-cli-formbuilder/mixins/model-type';

export default Ember.Component.extend(ModelTypeMixin, {
  classNameBindings: [':fb-field-wrapper', 'typeClass', 'isSelected:selected', 'model.wholeLine:whole-line'],

  model: null,
  targetObject: null,

  typeClass: Ember.computed('model.type', function () {
    return 'form-field-' + this.get('model.type');
  }),

  isSelected: Ember.computed('model.name', 'targetObject.field.name', function () {
    return Ember.isEqual(this.get('model.name'), this.get('targetObject.field.name'));
  }),

  title: Ember.computed('model.displayName', function () {
    return this.get('model.displayName') || 'Display Name';
  }),

  actions: {
  }
});
