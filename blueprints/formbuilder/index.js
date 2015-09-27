module.exports = {
  description: 'Blueprint for ember-cli-formbuilder',

  afterInstall: function() {
    // return this.addAddonToProject('ember-i18n', '^4.1.3').then(function () {
    return this.addBowerPackageToProject('coreweb-css', 'git://github.com/hilotus/coreweb-css.git');
    // }.bind(this));
  }
};
