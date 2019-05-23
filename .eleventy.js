const util = require('util')
const dayjs = require('dayjs')
const typogr = require('typogr')
const pluginTOC = require('eleventy-plugin-toc')
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor")

module.exports = function(eleventyConfig) {

  // Pass Through Copt
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/fonts')

  // Filters
  eleventyConfig.addFilter('dumpCircular', function(val) {
    return util.inspect(val, {showHidden: true, depth: 2, colors: false})
  })

  eleventyConfig.addFilter('dateReadable', function(val) {
    return dayjs(val).format('MMM DD, YYYY')
  })

  eleventyConfig.addFilter('dateIso', function(val) {
    return dayjs(val).toISOString()
  })

  eleventyConfig.addFilter('typogr', function(val) {
    return typogr.typogrify(val)
  })

  // Collections
  eleventyConfig.addCollection("postsReverse", function(collection) {
    return collection.getAllSorted().reverse();
  })

  eleventyConfig.addCollection("curated", function(collection) {
    const curated = {}
    curated.work = collection.getFilteredByGlob(['src/work/*.md'])
    curated.articles = collection.getFilteredByGlob(['src/articles/*.md'])
    return curated
  })

  // Plugins
  eleventyConfig.addPlugin(pluginTOC)

  // Libaries
  eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#'
  })
  )

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
