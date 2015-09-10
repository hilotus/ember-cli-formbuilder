import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  classNameBindings: ['class'],
  'class': null,
  model: null,

  // selected option
  selected: null,

  // price field
  currencies: ['usd', 'cny', 'eur', 'gbp'],

  setup: function () {
    Ember.run.schedule('afterRender', this, function () {
      this.$().on('change', function (event) {
        this.set('selected', event.target.value);
      }.bind(this));
    });
  }.on('didInsertElement')
});
