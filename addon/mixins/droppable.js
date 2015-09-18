import Ember from 'ember';

export default Ember.Mixin.create({
  fieldsLengthChanged: Ember.observer('model.fields.length', function () {
    Ember.run.schedule('afterRender', this, function () {
      if (this.get('model.fields.length') > 0) {
        this.set('oldOrder',
            Ember.$.map(this.$('.form-field-collection').children('.fb-field-wrapper'),
              function (item) {
                return item.id;
              })
          );
        this.$('.form-field-collection').sortable('refresh');
      }
    });
  }),

  didInsertElement: function () {
    Ember.run.schedule('afterRender', this, function () {
      this.$('.form-field-collection').sortable({
        update: function() {
          var newOrder = Ember.$(this).sortable('toArray'),
            view = Ember.$(this).data('view'),
            oldOrder = view.get('oldOrder'),
            fields = view.get('model.fields'),
            sortedFields, oldIndex;

          sortedFields = newOrder.map(function (eid) {
            oldIndex = oldOrder.indexOf(eid);
            return fields.get(oldIndex);
          });
          view.set('model.fields', sortedFields);
        }
      }).data('view', this);
    });
  }
});
