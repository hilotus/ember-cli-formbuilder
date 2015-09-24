import Form from 'ember-cli-formbuilder/models/form';
import TextField from 'ember-cli-formbuilder/models/fields/text-field';
import ParagraphField from 'ember-cli-formbuilder/models/fields/paragraph-field';
import SingleChoiceField from 'ember-cli-formbuilder/models/fields/single-choice-field';
import MultipleChoiceField from 'ember-cli-formbuilder/models/fields/multiple-choice-field';
import DateField from 'ember-cli-formbuilder/models/fields/date-field';
import TimeField from 'ember-cli-formbuilder/models/fields/time-field';
import NumberField from 'ember-cli-formbuilder/models/fields/number-field';
import PriceField from 'ember-cli-formbuilder/models/fields/price-field';
import EmailField from 'ember-cli-formbuilder/models/fields/email-field';
import LinkField from 'ember-cli-formbuilder/models/fields/link-field';
import SectionField from 'ember-cli-formbuilder/models/fields/section-field';
import LabelField from 'ember-cli-formbuilder/models/fields/label-field';

export default {
  name: 'form-field',

  initialize: function(registry) {
    registry.register('form-model:main', Form, { instantiate: false, singleton: true });
    registry.register('form-field-model:text', TextField, { instantiate: false, singleton: true });
    registry.register('form-field-model:paragraph', ParagraphField, { instantiate: false, singleton: true });
    registry.register('form-field-model:single-choice', SingleChoiceField, { instantiate: false, singleton: true });
    registry.register('form-field-model:multiple-choice', MultipleChoiceField, { instantiate: false, singleton: true });
    registry.register('form-field-model:date', DateField, { instantiate: false, singleton: true });
    registry.register('form-field-model:time', TimeField, { instantiate: false, singleton: true });
    registry.register('form-field-model:number', NumberField, { instantiate: false, singleton: true });
    registry.register('form-field-model:price', PriceField, { instantiate: false, singleton: true });
    registry.register('form-field-model:email', EmailField, { instantiate: false, singleton: true });
    registry.register('form-field-model:link', LinkField, { instantiate: false, singleton: true });
    registry.register('form-field-model:section', SectionField, { instantiate: false, singleton: true });
    registry.register('form-field-model:label', LabelField, { instantiate: false, singleton: true });
  }
};
