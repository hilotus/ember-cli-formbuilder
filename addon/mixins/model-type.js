import Ember from 'ember';

export default Ember.Mixin.create({
  isText: Ember.computed('model.type', function () {
    return this.get('model.type') === 'text';
  }),

  isParagraph: Ember.computed('model.type', function () {
    return this.get('model.type') === 'paragraph';
  }),

  isLink: Ember.computed('model.type', function () {
    return this.get('model.type') === 'link';
  }),

  isEmail: Ember.computed('model.type', function () {
    return this.get('model.type') === 'email';
  }),

  isNumber: Ember.computed('model.type', function () {
    return this.get('model.type') === 'number';
  }),

  isPrice: Ember.computed('model.type', function () {
    return this.get('model.type') === 'price';
  })
});
