import Ember from 'ember';
import ModelTypeMixin from 'ember-cli-formbuilder/mixins/model-type';

export default Ember.Component.extend(ModelTypeMixin, {
  classNameBindings: [':form-builder-field-wrapper', 'typeClass', 'isSelected:selected', 'model.wholeLine:whole-line'],

  model: null,
  targetObject: null,

  typeClass: Ember.computed('model.type', function () {
    return 'form-field-' + this.get('model.type');
  }),

  isSelected: Ember.computed('model.name', 'targetObject.field.name', 'targetObject.targetObject.field.name', function () {
    if (this.get('targetObject.model.isSection')) {  // field in section
      return Ember.isEqual(this.get('model.name'), this.get('targetObject.targetObject.field.name'));
    } else {
      return Ember.isEqual(this.get('model.name'), this.get('targetObject.field.name'));
    }
  }),

  title: Ember.computed('model.title', function () {
    var title = !!window.I18nForm ? window.I18nForm.t('newFieldTitle') : 'Title';
    return this.get('model.title') || title;
  }),

  // currency field with font awesome Icon
  currencyIcon: Ember.computed('model.selectedCurrency', function () {
    return 'fa ' + 'fa-' + this.get('model.selectedCurrency.name');
  })
});
