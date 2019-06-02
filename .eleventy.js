const util = require('util')
const { DateTime } = require('luxon')
const typogr = require('typogr')
const pluginTOC = require('eleventy-plugin-toc')
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function(eleventyConfig) {

  // Pass Through Copy
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy('src/data')
  eleventyConfig.addPassthroughCopy('src/scripts/service-worker.js')
  eleventyConfig.addPassthroughCopy('src/admin')

  // Filters
  eleventyConfig.addFilter('dumpCircular', function(val) {
    return util.inspect(val, {showHidden: true, depth: 2, colors: false})
  })

  eleventyConfig.addFilter('dateReadable', function(val) {
    return DateTime.fromJSDate(val, {zone: 'utc'}).toFormat('MMM dd, yyyy')
  })

  eleventyConfig.addFilter('dateIso', function(val) {
    return DateTime.fromJSDate(val, {zone: 'utc'}).toISO()
  })

  eleventyConfig.addFilter('dateRSS', function(val) {
    return DateTime.fromJSDate(val, {zone: 'utc'}).toHTTP()
  })

  eleventyConfig.addFilter('dateHtmlString', function(val) {
    return DateTime.fromJSDate(val, {zone: 'utc'}).toFormat('yyyy-LL-dd')
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
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  // Libaries
  eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  })
  .use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: ''
  })
  )

  // Layout Alias
  eleventyConfig.addLayoutAlias('list.hbs', 'layouts/list.njk')
  eleventyConfig.addLayoutAlias('post.njk', 'layouts/post.njk')

  // Shortcodes
  eleventyConfig.addShortcode('figure', function(url, alt, caption, classes) {
    return `<figure class="${classes}">
    <img src="${url}" alt="${alt}"/>
    <figcaption>${caption}</figcaption>
    </figure>`
  })

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
