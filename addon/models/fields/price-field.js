import Ember from 'ember';
import Field from '../field';

export default Field.extend({
  currencies: ['usd', 'cny', 'eur', 'gbp'],
  selectedCurrency: 'usd',

  currencyIcon: Ember.computed('selectedCurrency', function () {
    return 'fa ' + 'fa-' + this.get('selectedCurrency');
  })
});
