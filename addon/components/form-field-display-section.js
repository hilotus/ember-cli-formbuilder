import Ember from 'ember';
import Droppable from 'ember-cli-formbuilder/mixins/droppable';

export default Ember.Component.extend(Droppable, {
  classNameBindings: [':fb-field-wrapper', ':form-field-section', ':whole-line', 'isSelected:selected'],

  model: null,
  targetObject: null,

  isSelected: Ember.computed('model.name', 'targetObject.field.name', function () {
    return Ember.isEqual(this.get('model.name'), this.get('targetObject.field.name'));
  }),

  title: Ember.computed('model.title', function () {
    return this.get('model.title') || 'Title';
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
