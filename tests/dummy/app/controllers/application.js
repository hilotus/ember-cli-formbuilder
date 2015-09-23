import Ember from 'ember';
import Form from 'ember-cli-formbuilder/models/form';

export default Ember.Controller.extend({
  init: function () {
    this._super();
    this.set('model', Form.create({name: 'My form', description: 'My form description', fields: []}));
  },

  actions: {
    printModel: function () {
      console.log(JSON.stringify(this.get('model').serialize()));
    }
  }
});
