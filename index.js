/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-formbuilder',

  included: function(app) {
    this._super.included(app);

    // js
    app.import(app.bowerDirectory + '/jquery-ui-sortable/jquery-ui-sortable.js');

    // css
    app.import(app.bowerDirectory + '/coreweb-css/css/colorful.css');
    app.import(app.bowerDirectory + '/coreweb-css/css/formbuilder.css');

    // font awesome
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: "fonts"});
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot', {destDir: "fonts"});
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg', {destDir: "fonts"});
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {destDir: "fonts"});
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: "fonts"});
    app.import(app.bowerDirectory + '/font-awesome/fonts/FontAwesome.otf', {destDir: "fonts"});
    app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.min.css');
  }
};
