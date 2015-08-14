import Ember from 'ember';
import Field from 'ember-cli-formbuilder/models/field';

export default Ember.Component.extend({
  classNames: ['fb-main'],
  model: null,

  selectedField: null,

  tag: 'editForm',

  isAddNewFieldTag: Ember.computed('tag', function () {
    return this.get('tag') === 'addNewField';
  }),

  isEditFieldTag: Ember.computed('tag', function () {
    return this.get('tag') === 'editField';
  }),

  isEditFormTag: Ember.computed('tag', function () {
    return this.get('tag') === 'editForm';
  }),

  actions: {
    toogleTag: function (tag) {
      this.set('tag', tag);
    },

    addField: function (fieldType) {
      if (this.model) {
        this.get('model.fields').push(Field.create(fieldType));
      }
    }
  }
});
