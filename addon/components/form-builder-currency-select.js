import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  classNameBindings: ['class'],
  'class': null,
  model: null,

  // selected option
  selected: null,

  // price field
  currencies: Ember.computed(function () {
    return [
      { name: 'usd', value: window.I18nForm.t('currencies.usd') },
      { name: 'cny', value: window.I18nForm.t('currencies.cny') },
      { name: 'eur', value: window.I18nForm.t('currencies.eur') }
    ];
  }),

  setup: function () {
    Ember.run.schedule('afterRender', this, function () {
      this.$().on('change', function (event) {
        this.set('selected', this.get('currencies').filter(
          function (currency) { return currency.name === event.target.value; }.bind(this)
        )[0]);
      }.bind(this));
    });
  }.on('didInsertElement')
});
