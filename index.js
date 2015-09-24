/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-formbuilder',

  included: function(app) {
    this._super.included(app);

    // css
    app.import(app.bowerDirectory + '/coreweb-css/css/formbuilder.css');
  }
};
