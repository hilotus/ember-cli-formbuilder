import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':fb-field-wrapper', ':whole-line', 'isSelected:selected'],

  model: null,
  targetObject: null,

  isSelected: Ember.computed('model.name', 'targetObject.field.name', function () {
    return Ember.isEqual(this.get('model.name'), this.get('targetObject.field.name'));
  }),

  title: Ember.computed('model.displayName', function () {
    return this.get('model.displayName') || 'Display Name';
  }),

  actions: {
    select: function (field) {
      if (!field) {
        throw new Ember.Error('#params field can not be null.');
      }

      this.set('targetObject.field', field);
    },

    delete: function (field) {
      if (!field) {
        throw new Ember.Error('#params field can not be null.');
      }

      this.set('field', null);
      this.get('model.fields').removeObject(field);
    }
  }
});
