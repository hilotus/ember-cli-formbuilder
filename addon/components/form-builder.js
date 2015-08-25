import Ember from 'ember';
import Form from 'ember-cli-formbuilder/models/form';

export default Ember.Component.extend({
  classNames: ['fb-main'],

  model: null,  // form model
  field: null,  // selected field

  tag: 'editForm',  // left tabs

  isAddNewFieldTag: Ember.computed('tag', function () {
    return this.get('tag') === 'addNewField';
  }),

  isEditFieldTag: Ember.computed('tag', function () {
    return this.get('tag') === 'editField';
  }),

  isEditFormTag: Ember.computed('tag', function () {
    return this.get('tag') === 'editForm';
  }),

  fieldChanged: Ember.observer('field', function () {
    if (this.field) {
      this.set('tag', 'editField');
    }
  }),

  actions: {
    toggleTag: function (tag) {
      this.set('tag', tag);
    },

    addField: function (fieldType) {
      if (!this.model) {
        throw new Ember.Error('model is null.');
      }

      var field = Form.createField(fieldType, this.container);
      this.set('field', field);
      this.get('model.fields').pushObject(field);
    },

    select: function (field) {
      if (!field) {
        throw new Ember.Error('#params field can not be null.');
      }

      this.set('field', field);
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
