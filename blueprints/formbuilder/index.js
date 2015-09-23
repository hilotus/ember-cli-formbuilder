module.exports = {
  description: 'Blueprint for ember-cli-formbuilder',

  afterInstall: function() {
    return this.addBowerPackageToProject('font-awesome', '~4.4.0').then(function () {
      return this.addBowerPackageToProject('coreweb-css', 'git://github.com/hilotus/coreweb-css.git');
    }.bind(this));
  }
};
