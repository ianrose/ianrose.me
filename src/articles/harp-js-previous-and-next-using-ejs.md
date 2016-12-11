---
title: Harp.js Previous and Next using EJS
date: 2015-12-08
modified: null
tags:
description: Provide the user with previous and next page navigation in a Harp.js site using Embeded JavaScript.
layout: post.hbs
art: null
author:
  name: Ian Rose
---

**Raymond Camden** has a great [article](http://www.raymondcamden.com/2014/02/26/Creating-NextPrevious-Links-in-HarpJS) that provides a walkthrough on how to accomplish something very similar. The difference is we will be rendering the previous and next post’s title and description.

In a Harp Boilerplate, [Kenneth Ormandy](http://kennethormandy.com/) provides [article navigation](https://github.com/kennethormandy/hb-remedy/blob/master/public/_shared/article-nav.jade) in a Jade template. We will use that as a base for our article navigation in EJS. [Skip to the final code.](#the-navigation-partial)

## Some Example Data

In our articles folder we would have something like the JSON below in a `_data.json` file.

```js
{
  "article-three": {
    "title": "Article Three",
    "date": "2015-01-03",
    "modified": null,
    "desc": "Description three.",
    "published": true,
    "art": null
  },
  "article-two": {
    "title": "Article Two",
    "date": "2015-01-02",
    "modified": null,
    "desc": "Description two.",
    "published": true,
    "art": null
  },
  "article-one": {
    "title": "Article One",
    "date": "2015-01-01",
    "modified": null,
    "desc": "Description one.",
    "published": true,
    "art": null
  }
}
```

In our work folder we would have something like the JSON below in a `_data.json` file.

```js
{
  "work-three": {
    "title": "Work Three",
    "date": "2015-01-03",
    "modified": null,
    "desc": "Description three.",
    "published": true,
    "art": null
  },
  "work-two": {
    "title": "Work Two",
    "date": "2015-01-02",
    "modified": null,
    "desc": "Description two.",
    "published": true,
    "art": null
  },
  "work-one": {
    "title": "Work One",
    "date": "2015-01-01",
    "modified": null,
    "desc": "Description one.",
    "published": true,
    "art": null
  }
}
```

## Setting up the Data

Having a reusable piece of navigation is helpful. For example, you have a site that has a blog with articles and another part with a portfolio of work. Both parts of the site could use the same navigation system.

To extend Kenneth's boilerplate code we can abstract that concept to collections of `posts`. In the EJS that is responsible for generating an article: we include the post partial, create an array that contains all of our articles, and include the navigation partial:

```js
<% include ../_includes/post %>
<% var posts = []; %>
<% for(var slug in public.articles._data){ %>
  <% var post = public.articles._data[slug] %>
  <% if(post.date && post.published !== false) { %>
    <% post.slug = slug; %>
    <% posts.push(public.articles._data[slug]);%>
  <% } %>
<% } %>
<% include ../_includes/post-nav %>
```
For our portfolio pieces we write almost the same thing in the Work partial as we did in the Articles partial. However this time, we populate the `posts` array with our collection of `work`:

```js
<% include ../_includes/post %>
<% var posts = []; %>
<% for(var slug in public.work._data){ %>
  <% var post = public.work._data[slug] %>
  <% if(post.date && post.published !== false) { %>
    <% post.slug = slug; %>
    <% posts.push(public.work._data[slug]);%>
  <% } %>
<% } %>
<% include ../_includes/post-nav %>
```

You will notice that we are wrapping `posts.push` in a conditional. This condition says that we only push a `post` into our `posts` array if the it has a `date` defined and is set to `published`.

## Pass that Data

In the case of EJS, let’s first sort the `posts` by their date using the method from Kenneth’s Jade template:

```js
<% posts.sort(function(a,b){ a = new Date(a.date); b = new Date(b.date); return b<a?-1:b>a?1:0; }).slice(0, 10) %>
```

The array of posts is now sorted by the date published, which would be defined in the `_data.json` located in the `articles` and `work` folders respectively.

Now we need to figure out which post is currently being rendered so we can display the previous post and the next post. We setup a `for` loop to go through our `posts` array. In that loop we leverage the `current` object in Harp. If the slug of the index matches the `current.source` we create two variables.

The `prev` variable is `-1` of index from our current page index and the `next` variable is `+1` from our current page index.

```js
<% posts.sort(function(a,b){ a = new Date(a.date); b = new Date(b.date); return b<a?-1:b>a?1:0; }).slice(0, 10) %>

<% for(var i = 0; i < posts.length; i++) { %>
  <% if(posts[i].slug == current.source) { %>
    <% var prev = posts[i-1] %>
    <% var next = posts[i+1] %>
    <!-- Our Markup Will Go Here -->
  <% } %>
<% } %>
```

## The Navigation Partial<a id="the-navigation-partial"></a>

We are almost done. Now we have the previous post data and next post data stored in their respective variables. It's time to pass that data into some markup:

```js
<% posts.sort(function(a,b){ a = new Date(a.date); b = new Date(b.date); return b<a?-1:b>a?1:0; }).slice(0, 10) %>

<% for(var i = 0; i < posts.length; i++) { %>
  <% if(posts[i].slug == current.source) { %>
    <% var prev = posts[i-1] %>
    <% var next = posts[i+1] %>

    <nav>
      <% if(prev) { %>
          <h2><%- prev.title %></h2>
          <p><%- prev.desc %></p>
          <a href="/<%= current.path[0] %>/<%= prev.slug %>">Previous</a>
      <% } %>
      <% if(next) { %>
        <h2><%- next.title %></h2>
        <p><%- next.desc %></p>
        <a href="/<%= current.path[0] %>/<%= next.slug %>">Next</a>
      <% } %>
    </nav>

  <% } %>
<% } %>
```

We setup two conditions: one for the previous post and the other for the next post. If there is a `prev` post we output the post’s title, description, and a link to the previous post in the `nav` markup. We do the same thing for the next post’s markup, but instead we use the `next` post data.

In the end, we are using one navigation partial for articles and work using Harp’s `_data.json` metadata system and `current` object.
