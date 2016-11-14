---
title: Line Length on News Websites
date: 2016-11-14T00:00:00.000Z
modified: null
draft: true
tags: null
description: >-
  An analysis of the  measure of body text across some top news websites.
layout: post.hbs
script: news/vis.js
---
In typography there are a number metrics and characteristics that are helpful indicators that a block of type is more or less readable. The characters per line in body text is one of the those metrics, it is also referred to as a type's measure.

As web typography continues to advance I was curious to see how some of the top news websites follow the [rule-of-thumb of 45 to 75](http://webtypography.net/2.1.2) characters per line or the seemingly more screen centric [45 to 90](http://practicaltypography.com/line-length.html) characters. Including [NBC News](http://www.nbcnews.com/), where I work and am on the team that is responsible for the article typesetting.

The thinking behind that range of characters is that if the line length is too short your eyes are quickly hitting the end of the line and must move immediately to the next. This results in a tiring reading experience. However, if the line length is too long, after reading the first line of text you now have traveled so far to the right that finding the start of the second line on the left can be tricky.

## A Look at Twenty Publishers

I looked at the twenty publishers I personally have bookmarked and visit on either a regular or semi-regular basis.

<figure class="media-full">
  <h3 class="media-title">Averaged Character Counts</h3>
  <p class="media-subtitle">First line of the first five full width body paragraphs</p>
  <div id="histogram"></div>
  <figcaption>Character counts collected on 11/13/2016 from the sites' lead story.</figcaption>
</figure>

Using the [45to75](https://chrome.google.com/webstore/detail/45to75/efmppndinjbljeellfdkpghgblenbcdd) Chrome extension I [collected the character counts](/assets/data/news-websites-line-lengths-11-13-2016.csv) of the first line of the first five full width body text paragraphs. I skipped paragraphs that had inset callouts or media and one sentence long paragraphs.

## Reading News on Screens

Rounding the averages, <mark>20%</mark> of the sites fell within the range of 45 to 75 and <mark>80%</mark> within the 45 to 90. Those that did not, averaged a <mark>94.6</mark> character count which is very close and could disappear with a larger sample size. It could also be attributed to decisions made by the design teams that accounted for more typography elements.


<figure class="media-full">
  <h3 class="media-title">Frequency of Line Lengths</h3>
  <p class="media-subtitle">Character counts from twenty publishers found in their body text</p>
  <div id="standard"></div>
  <figcaption>100 character counts collected on 11/13/2016 from the sites' lead story.</figcaption>
</figure>

Going in I made the guess that sites with a print origin were going to lean towards a shorter line length. Those two attributes turned out to have very little to no correlation.

I intentionally limited the data to desktop viewports for this initial look at measure. Looking at this collection of sites and their body text measure at different viewports could be very interesting.

Currently, I'm still a fan of finding a nice type size near `1em`, which last time I checked most browsers set that to `16px`, then sizing slightly up or down depending on the typeface. Then measure the line length at mobile viewports and find my `max-width` towards the desktop spectrum.