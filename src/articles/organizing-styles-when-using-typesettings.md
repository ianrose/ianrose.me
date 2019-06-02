---
art: null
author:
  name: Ian Rose
layout: post.njk
date: 2014-05-01T13:00:00.000Z
modified: null
tags: 
  - articles
title: Organizing Styles When Using Typesettings
description: >-
  At work I’ve been cranking on a prototype. I decided to give a Typesettings a
  go in more of a production setting that required designing in the browser.
---

**As the prototype** started to get more complicated the need to break things into “modules” became apparent. Since [Typesettings](http://typesettings.io) uses Ems I needed settings to quickly adjust specific modules. The solution uses Sass variables in a very simple way. At the top of the partial for the module I set “font size context” variables for the different sizes. This makes it easy to maintain the mixins and functions for that specific module:

```css
// This is part of the _btn.scss
//
// Provides two different size buttons set in Ems that
// have the same amount of padding with pixel borders.
//
// [1] & [2] For the small button sets padding to
// 2 * $base-vertical-unit, which would be 12px in Ems.
// The small font size context variable is passed.
//
// [3] & [4] For the small button sets border top and
// bottom to 1px with (1 * $base-vertical-unit) - 1px.
// Which comes out to 1px border and 5px (in Ems) padding.
// The small font size context variable is passed.
//
// [5] & [6] For the medium button sets padding to
// 2 * $base-vertical-unit, which would be 12px in Ems.
// The medium font size context variable is passed.
//
// [7] & [8] For the medium button sets border top and
// bottom to 1px with (1 * $base-vertical-unit) - 1px.
// Which comes out to 1px border and 5px (in Ems) padding.
// The medium font size context variable is passed.

// Font size context variable using a modular scale value
$btn_sm-font-size: $ms-down3;

// Font size context variable using a modular scale value
$btn_md-font-size: $ms-down1;

.btn {
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  background-color: transparent;
  white-space: nowrap;
  border-radius: 3px;
  text-decoration: none;
  font-family: $font-sans-semibold;
  user-select: none;
}

.btn_sm {
  // Sets the font size and line height
  @include setType(3, $btn_sm-font-size);
}

.btn_md {
 // Sets the font size and line height
  @include setType(3, $btn_md-font-size);
}

.btn_default {
  color: $light-blue;
  border-right-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: $light-blue;
}

.btn_sm.btn_default {
  padding-right: emRhythm(2, $btn_sm-font-size);//[1]
  padding-left: emRhythm(2, $btn_sm-font-size);//[2]
  @include rhythmBorderTop(1px, 1, $btn_sm-font-size);//[3]
  @include rhythmBorderBottom(1px, 1, $btn_sm-font-size);//[4]
}

.btn_md.btn_default {
  padding-right: emRhythm(2, $btn_md-font-size);//[5]
  padding-left: emRhythm(2, $btn_md-font-size);//[6]
  @include rhythmBorderTop(1px, 1, $btn_md-font-size);//[7]
  @include rhythmBorderBottom(1px, 1, $btn_md-font-size);//[8]
}
```

Again nothing too crazy or clever. Just an easy to adjust and understand use of Sass variables.
