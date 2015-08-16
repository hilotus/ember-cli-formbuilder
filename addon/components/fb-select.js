import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  classNameBindings: ['class'],
  'class': null,
  model: null,
  selected: null,

  setup: function () {
    Ember.run.schedule('afterRender', this, function () {
      this.$().on('change', function (event) {
        this.set('selected', event.target.value);
      }.bind(this));
    });
  }.on('didInsertElement')
});
