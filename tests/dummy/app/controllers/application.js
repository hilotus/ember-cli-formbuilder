import Ember from 'ember';
import Form from 'ember-cli-formbuilder/models/form';

export default Ember.Controller.extend({
  model: function () {
    return Form.create({name: 'My form', description: 'My form description', fields: []});
  }.property(),

  modelChanged: Ember.observer('model.*', 'model.fields.[].*', function () {
    var json = this.get('model').serialize();
    console.log(JSON.stringify(json));
  })
});
