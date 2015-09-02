import Ember from 'ember';
import Serializable from 'ember-cli-formbuilder/mixins/serializable';

var Form = Ember.Object.extend(Serializable, {
  name: null,
  description: null,
  fields: []
});

Form.reopenClass({
  createField: function (fieldType, container) {
    var Field = container.lookup('form-field-model:' + fieldType);
    if (!Field) {
      throw new Ember.Error(fieldType + ' is not supported.');
    }
    return Field.create({name: Ember.uuid(), type: fieldType});
  }
});

export default Form;
