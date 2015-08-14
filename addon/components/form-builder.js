import Ember from 'ember';

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
    toogleTag: function (tag) {
      this.set('tag', tag);
    },

    addField: function (fieldType) {
      if (!this.model) {
        throw new Ember.Error('model is null.');
      }

      var Field = this.container.lookup('form-field-model:' + fieldType);
      if (!Field) {
        throw new Ember.Error(fieldType + ' is not supported.');
      }
      var field = Field.create({name: Ember.uuid(), type: fieldType});
      // this.set('field', field);
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
