import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'option',
  attributeBindings: ['value', 'isSelected:selected'],

  selected: null,
  // option value
  // {name: 'usd', value: 'usd'}
  displayValue: null,
  value: null,

  isSelected: Ember.computed('selected', 'value', function () {
    return this.get('selected') && this.get('selected.name') === this.get('value');
  })
});
