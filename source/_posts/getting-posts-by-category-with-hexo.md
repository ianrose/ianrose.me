---
title: Getting Posts by Category with Hexo
excerpt: While building with Hexo I came across a need get all the posts by a specific category and render them through a specific partial.
date: 2015-01-20 20:39:15
tags:
categories:
- notes
---

Hexo is great open source project in many ways. However due to language barriers the English documentation needs help from the project’s community. Myself included. Skip right to the [solution](#The_Solution).

## The Scenario

Let’s say we have two categories, “Articles” and “Projects”. You have created three posts categorized as “Articles” and three posts categorized as “Projects”. On the homepage you want to display all the “Article” posts with a headline and excerpt text. Then in another column you want to display all the “Project” posts with a headline and a large image.

At first I could not find an example of this scenario anywhere, in the [documentation](http://hexo.io/docs/ "Hexo Docs"), [GitHub issues](https://github.com/hexojs/hexo/issues/976 "My GitHub Issue"), or countless Google Searches.

The challenge it turned out was not the lack of functionality with Hexo it was parsing through the docs, repositories and using Google translate.

## The Solution

Thanks to [Brad Oyler](http://bradoyler.com/ "Brad Oyler's website") for pairing up with me to figure this out. Hexo does offer helpers that leverage its API. The helper, `get_posts` is the one to use.

```js`
<% get_posts(
  count: 3,
  orderby: "updated",
  order: -1,
  query: categories: ‘projects’
  }).each(function(post)  %>
    <%- partial('_partial/index-post', post: post, index: true) %> 
<% }) %>
```

The `query` option is the key to all this and knowing to pass `categories: 'projects'` made the solution click.