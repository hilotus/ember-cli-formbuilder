/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-formbuilder',

  init: function(name) {
    this.treePaths['vendor'] = require('path').join('i18n', 'i18n.js');
  },

  included: function(app) {
    this._super.included(app);

    // css
    app.import(app.bowerDirectory + '/coreweb-css/css/formbuilder.css');

    // i18n
    this.app.import('vendor/i18n/i18n.js');
  }
};
