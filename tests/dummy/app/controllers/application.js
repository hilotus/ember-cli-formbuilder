import Ember from 'ember';

export default Ember.Controller.extend({
  init: function () {
    this._super();
    var Form = this.container.lookupFactory('form-model:main');
    var form = Form.create();
    form.initFromJson({name: 'My form', description: 'My form description', fields: []});
    this.set('model', form);
  },

  actions: {
    printModel: function () {
      console.log(JSON.stringify(this.get('model').serialize()));
    }
  }
});
