import Ember from 'ember';

export default Ember.Component.extend({
  model: null,

  actions: {
    onCheck: function (option) {
      var val = !option.checked;
      this.get('model').forEach(function (opt) { opt.set('checked', false); });
      option.set('checked', val);
    },

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
