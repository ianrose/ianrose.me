// Set a ture or false for production/development. Use to run certain plugins
const devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production')
const debugMode = ((process.env.NODE_ENV || '').trim().toLowerCase() === 'debug')

const fs = require('fs')
const path = require('path')
const Metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const assets = require('metalsmith-assets')
const collections = require('metalsmith-collections')
const permalinks = require('metalsmith-permalinks')
const browserSync = devBuild ? require('metalsmith-browser-sync') : null
const globaldata = require('metalsmith-metadata')
const sass = require('metalsmith-sass')
const inplace = require('metalsmith-in-place')
const debug = require('metalsmith-debug')
const helpers = require('metalsmith-register-helpers')
const sitemap = require('metalsmith-mapsite')
const postcss = require('metalsmith-with-postcss')
const paths = require('metalsmith-paths')
const drafts = require('metalsmith-drafts')
const autotoc = require('metalsmith-autotoc')
const webpack = require('metalsmith-webpack2')
const prism = require('metalsmith-prism')
const writemetadata = require('metalsmith-writemetadata')
const webpackConfig = require('./webpack.config.js')
const pkg = require('./package.json')
const config = require('./config')

// Global Configuration
config.version = pkg.version
config.devBuild = devBuild
config.debugMode = debugMode

// Adds metadata to Metlasmith from files
const data = {}
if (fs.existsSync(config.src + 'data/globals/')) {
  var dataFiles = fs.readdirSync(path.join(__dirname, config.src + 'data', 'globals'))

  dataFiles.forEach(function (filename) {
    data[filename.split('.')[0]] = 'data/globals/' + filename
  })
}

// Metalsmith Build
let ms = Metalsmith(__dirname)
  .source(config.src)
  .destination(config.dest)
  .metadata(config)
  .use(globaldata(data))
  .use(collections({
    work: {
      pattern: 'work/**/!(index.md)',
      sortBy: 'date',
      reverse: true
    },
    articles: {
      pattern: 'articles/**/!(index.md)',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true,
    langPrefix: 'language-'
  }))
  .use(prism())
if (!devBuild) {
  ms.use(drafts())
}
ms.use(permalinks({
  relative: false,
  pattern: ':file',
  linksets: [{
    match: {collection: 'articles'},
    pattern: ':collection/:title'
  }, {
    match: {collection: 'work'},
    pattern: ':collection/:title'}
  ]
}))
  .use(paths({
    property: 'paths',
    directoryIndex: 'index.html'
  }))
  .use(helpers({
    directory: 'lib/helpers'
  }))
  .use(autotoc({
    selector: 'h2, h3, h4'
  }))
  .use(inplace({
    engine: 'handlebars',
    pattern: '**/*.{html,xml,txt}',
    directory: config.src
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: 'layouts',
    partials: 'partials',
    default: 'default.hbs',
    pattern: '**/*.html'
  }))
  .use(sass({
    outputStyle: devBuild ? 'expanded' : 'compressed',
    outputDir: 'styles',
    sourceMap: devBuild || false,
    sourceMapContents: devBuild || false
  }))
  .use(postcss({
    pattern: ['**/*.css', '!**/_*/*', '!**/_*'],
    from: '*.scss',
    to: '*.css',
    map: devBuild ? {inline: false} : false,
    plugins: {
      'autoprefixer': {browsers: ['> 0.5%', 'Explorer >= 10']}
    }
  }))
  .use(webpack(webpackConfig(config)))
  .use(assets({
    source: './src/assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))

if (debugMode) {
  ms.use(writemetadata({
    pattern: ['**/*.html'],
    bufferencoding: 'utf8'
  }))
}

if (devBuild) {
  ms.use(browserSync({
    server: config.dest,
    files: [config.src + '**/*.*', 'layouts/*.*', 'partials/**/*.*'],
    open: false,
    notify: false
  }))
}

ms.use(debug({
  files: false,
  match: '**/*.md'
}))
  .use(sitemap({ // generate sitemap.xml
    hostname: config.url,
    omitIndex: true
  }))
  .build(function (error) {
    console.log((devBuild ? 'Development' : 'Production'), 'build success, version', pkg.version)
    if (error) {
      console.log(error)
    }
  })
