---
title: Critical Styles in a Sass Metalsmith Project
date: 2016-12-23T13:00:00Z
description: Using the Metalsmith FileData plugin to create critical styles from compiled Sass.
layout: post.hbs
author:
    name: Ian Rose
---

**The situation**, you have a static site build using [Metalsmith](http://www.metalsmith.io/) which at some point in the build process compiles Sass into CSS. The desire is to have inline styles in the `<head>`.

The pain point for this particular situation is the the timing of the creation for that compiled CSS and when the file is available versus when the build process completes.

Thanks to [Steven Schobert](https://stevenschobert.com/) for pointing in me in the right direction. I created a [Metalsmith plugin](https://www.npmjs.com/package/metalsmith-filedata). The plugin takes the files you want and it grabs the contents of those file or files and throws the results into Metalsmith's metadata. That data, for example, can then be accessed in your projects' templates.

So to continue solving the critical styles the following solution is going to use the Metalsmith JavaScript API and [Handlebars](https://github.com/superwolff/metalsmith-layouts). To begin, we install the plugin as a dependency for the project:

```
npm install metalsmith-filedata --save
```

We then expose it to Metalsmith:

```js
var Metalsmith = require('metalsmith')
var sass = require('metalsmith-sass')
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var filedata = require('metalsmith-filedata')

Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .use(sass({...}))
  .use(filedata({
    pattern: ['styles/*.css'],
    key: 'cssData'
  }))
  .use(markdown())
  .use(layouts({...}))
  .build(function (err) {
    if (err) throw err
  })
```

The plugin defaults to the key `filedata` but in this example we have overwritten the default key with `cssData` and we have told the plugin to grab the contents for CSS files that are in the `styles` folder. In the case of critical styles in our project we can setup `./src/styles/main.scss` and `./src/styles/critical.scss` files. We now have the compiled contents available in the metadata.

```json
cssData: { 'styles/critical.css': '...', 'styles/main.css': '...'}
```

 In the `<head>` of the markup the compiled `main.css` will be hooked up asynchronously in a `<link>` tag and the compiled contents of `crtical.css` inlined via a `<style>...</style>` tag.

```html
<head>
  <meta charset="utf-8">
	<title>Page Title</title>
	<script><!-- loadCSS.js, cssrelpreload.js --></script>
	<link rel="preload" href="/styles/main.css" as="style" onload="this.rel='stylesheet'">
	<noscript>
      <link rel="stylesheet" href="/styles/main.css">
	</noscript>
	<style media="screen">
      {{cssData.[styles/critical.css]}}}
	</style>
</head>
```

To load `main.css` asynchronously the example is using [loadCSS](https://github.com/filamentgroup/loadCSS) and its [recommended technique](https://github.com/filamentgroup/loadCSS#recommended-usage-pattern). To play around with this example you can take a look and run [metalsmith-sass-critical-example](https://github.com/ianrose/metalsmith-sass-critical-example).
