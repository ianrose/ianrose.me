var Handlebars = require('handlebars');
// Helper Documentation: https://git.io/v6hSQ
var assembleHelpers = require('handlebars-helpers')({
  handlebars: Handlebars
});
var typogr = require('typogr');

module.exports = {
  typogrFormat: function (value) {
    return typogr(value).chain().initQuotes().smartypants().caps().value();
  }
};