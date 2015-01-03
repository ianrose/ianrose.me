---
title: Organizing Styles When Using Typesettings
excerpt: At work I've been cranking on a prototype. I decided to give a Typesettings a go in more of a production setting that required designing in the browser. Overall the experience has been pretty good.
art: west-4.jpg
date: 2014-05-01 17:19:25
tags: design
categories:
- articles
---

<span class=dropcap>I</span>f If you aren't familiar with Typesettings you can check out the project page that has examples and documentation

As the prototype started to get more complicated the need to break things into "modules" became apparent. Since Typesettings uses Ems I needed settings to quickly adjust specific modules. The solution uses Sass variables in a very simple way. At the top of the partial for the module I set "font size context" variables for the different sizes. This makes it easy to maintain the mixins and functions for that specific module:


```css
/* comment */
.btn {
  background-color: red;
}
```

Again nothing too crazy or clever. Just an easy to adjust and understand use of Sass variables.