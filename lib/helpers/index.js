var Handlebars = require('handlebars')

// Helper Documentation: https://git.io/v6hSQ
require('handlebars-helpers')({
  handlebars: Handlebars
})
var typogr = require('typogr')

module.exports = {
  typogrFormat: function (value) {
    return typogr(value).chain().initQuotes().smartypants().caps().value()
  },

  stringifyFormat: function (value) {
    return JSON.stringify(value, null, '\t')
  },

  ifEqual: function (val, test, options) {
    if (typeof test === 'undefined') {
      return options.inverse(this)
    }
    if (typeof test === 'number' || typeof test === 'boolean') {
      if (val === test) {
        return options.fn(this)
      } else {
        return options.inverse(this)
      }
    }
    var arrTest = test.split('||')
    for (var i = 0; i < arrTest.length; i++) {
      if (val === arrTest[i]) {
        return options.fn(this)
      }
    }
    return options.inverse(this)
  }
}
