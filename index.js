// Set a ture or false for production/development. Use to run certain plugins
var devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production')
var debugMode = ((process.env.NODE_ENV || '').trim().toLowerCase() === 'debug')

var fs = require('fs')
var path = require('path')
var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts')
var assets = require('metalsmith-assets')
var collections = require('metalsmith-collections')
var permalinks = require('metalsmith-permalinks')
var browserSync = devBuild ? require('metalsmith-browser-sync') : null
var globaldata = require('metalsmith-metadata')
var sass = require('metalsmith-sass')
var inplace = require('metalsmith-in-place')
var debug = require('metalsmith-debug')
var helpers = require('metalsmith-register-helpers')
var sitemap = require('metalsmith-mapsite')
var postcss = require('metalsmith-with-postcss')
var paths = require('metalsmith-paths')
var drafts = require('metalsmith-drafts')
var autotoc = require('metalsmith-autotoc')
var uglify = require('metalsmith-uglify')
var webpack = require('metalsmith-webpack')
var writemetadata = require('metalsmith-writemetadata')
var pkg = require('./package.json')

var dataFiles = fs.readdirSync(path.join(__dirname, 'src', 'data'))
var data = {}

dataFiles.forEach(function (filename) {
  data[filename.split('.')[0]] = 'data/' + filename
})

var config = {
  name: 'Ian Rose',
  version: pkg.version,
  devBuild: devBuild,
  debugMode: debugMode,
  domain: 'ianrose.me',
  url: 'http://www.ianrose.me',
  dest: './www/'
}

var ms = Metalsmith(__dirname)
  .source('src/')
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
    tables: true
  }))
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
    directory: 'lib'
  }))
  .use(autotoc({
    selector: 'h2, h3, h4'
  }))
  .use(inplace({
    engine: 'handlebars',
    pattern: '**/*.{html,xml}',
    directory: 'src/'
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
  .use(webpack({
    context: path.resolve(__dirname, './src/scripts/'),
    entry: {
      main: './index-main.js',
      post: './index-post.js'
    },
    devtool: devBuild ? 'source-map' : null,
    output: {
      path: path.resolve(__dirname, './www/scripts/'),
      filename: '[name]-bundle.js'
    }
  }))
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

if (!devBuild) {
  ms.use(uglify({
    removeOriginal: true,
    nameTemplate: '[name].js'
  }))
}

if (devBuild) {
  ms.use(browserSync({
    server: config.dest,
    files: ['src/**/*.*', 'layouts/*.*', 'partials/**/*.*'],
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
