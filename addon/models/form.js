import Ember from 'ember';
import Serializable from 'ember-cli-formbuilder/mixins/serializable';

var Form = Ember.Object.extend(Serializable, {
  name: null,
  description: null,
  fields: [],

  initFromJson: function (formJson) {
    this.setProperties({
      name: formJson.name,
      description: formJson.description
    });

    var Field, field;
    formJson.fields.forEach(function (fieldJson) {
      Field = this.container.lookupFactory('flow-field-model:' + fieldJson.type);
      field = Field.create(fieldJson);
      this.get('fields').pushObject(field);
    }, this);
  }
});

export default Form;
