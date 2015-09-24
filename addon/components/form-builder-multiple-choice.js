import Ember from 'ember';

export default Ember.Component.extend({
  model: null,

  actions: {
    delOpt: function (option) {
      this.get('model').removeObject(option);
    },

    addOption: function () {
      this.model.pushObject(Ember.Object.create({
        checked: false,
        label: null
      }));
    }
  }
});
