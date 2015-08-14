import Ember from 'ember';

export default Ember.Component.extend({
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

  isText: Ember.computed('model.type', function () {
    return this.get('model.type') === 'text';
  }),

  actions: {
  }
});
