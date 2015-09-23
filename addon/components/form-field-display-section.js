import Ember from 'ember';
// import Sortable from 'ember-cli-formbuilder/mixins/sortable';

export default Ember.Component.extend({
  classNameBindings: [':form-builder-field-wrapper', ':form-field-section', ':whole-line', 'isSelected:selected'],

  model: null,
  targetObject: null,
  sortPreview: false,

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
    },

    reorderItems: function (itemModels) {
      this.set('model.fields', itemModels);
    }
  }
});
