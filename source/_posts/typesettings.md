title: Typesettings
date: 2014-12-30 17:20:41
art: art.gif
arttext: Typesettings Mark by Q. Li from The Noun Project
layout: work
role: Creator/Maintainer
team: Personal Project
visit: "http://typesettings.io"
tags:
- design
- code
categories:
- work
---
A CSS preprocessor toolkit that helps set type & elements in Ems with modular scale, vertical rhythm, and responsive ratio based headlines.

<!--more-->

Typesettings provides a designer or developer a toolkit of Sass or Stylus functions and mixins that make setting nice type on the web easier.

## What Does It Solve

{% pullquote right %}
“Default styles to make creating nice type even easier”
{% endpullquote %}

The math involved in setting type both in size and space is not overly complex. However it can become very tedious. This toolkit, along with others, leverages the ability of a CSS preprocessors to calculate numbers combined with functions to remove that tedious work. Typesettings also provides optional default styles to make creating nice type even easier.

## Why Another Type Toolkit

{% pullquote left %}
“Borders set in pixels all while maintaing vertical rhythm”
{% endpullquote %}

Typesettings’ is unique because of its ability to have padding, margin, and font size set in Ems and have borders set in pixels all while maintaing vertical rythm. The toolkit does this by converting an entered pixel border width into Ems and subtracts that value from the padding of the element.