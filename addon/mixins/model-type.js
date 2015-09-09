import Ember from 'ember';

export default Ember.Mixin.create({
  isText: Ember.computed.equal('model.type', 'text'),
  isParagraph: Ember.computed.equal('model.type', 'paragraph'),
  isLink: Ember.computed.equal('model.type', 'link'),
  isEmail: Ember.computed.equal('model.type', 'email'),
  isNumber: Ember.computed.equal('model.type', 'number'),
  isPrice: Ember.computed.equal('model.type', 'price'),
  isSingleChoice: Ember.computed.equal('model.type', 'single-choice'),
  isMultipleChoice: Ember.computed.equal('model.type', 'multiple-choice'),
  isDate: Ember.computed.equal('model.type', 'date'),
  isTime: Ember.computed.equal('model.type', 'time'),
  isSection: Ember.computed.equal('model.type', 'section')
});
