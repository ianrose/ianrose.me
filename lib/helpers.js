var Handlebars = require('handlebars');

// Helper Documentation: https://git.io/v6hSQ
require('handlebars-helpers')({
  handlebars: Handlebars
});
var typogr = require('typogr');

module.exports = {
  typogrFormat: function (value) {
    return typogr(value).chain().initQuotes().smartypants().caps().value();
  },

   stringifyFormat: function (value) {
    return JSON.stringify(value, null, '\t');
  }
};
