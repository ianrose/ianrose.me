---
title: The to Good to be True CSS Text Rendering Property
date: 2015-01-22 22:18:10
excerpt: The CSS text rendering property is a mixed bag. On initial pass it seems to be an obvious choice for improving type on the web.
art: text-rendering.gif
arttext:
categories:
- notes
tags:
layout:
---

However after a bit of reading there are known [bugs](https://github.com/h5bp/html5-boilerplate/issues/78 "HTML5 Boilerplate GitHub") in some [browsers](https://code.google.com/p/chromium/issues/detail?id=114719 "Chromium Issues"), [operating systems](https://code.google.com/p/android/issues/detail?id=15067 "Android Issues") and [performance issues](http://www.marco.org/2012/11/15/text-rendering-optimize-legibility "Marco.org") on Android and older versions of iOS.<sup>[1](#fn1)</sup>

There are four values that text rendering can be set to <sup>[2](#fn2)</sup>:

1. `auto`: The browser renders the text based on when to optimize for speed, legibility, and geometric precision.
2. `optimizeSpeed`: The browser renders text for speed over the other values. It disables kerning and ligatures.
3. `optimizeLegibility`: The browser renders text for legibility over the other values. This enables kerning and optional ligatures.
4. `geometricPrecision`: The browser renders text for geometric precision over rendering speed and legibility.

So I’ve been playing around with just setting Legibility to headings and blockquotes. Keeping it to large sized and short pieces of text.

<ol id="footnotes">
	<li id="fn1">Much of this research can be found at <a href="https://css-tricks.com/almanac/properties/t/text-rendering/">css-tricks.com</a> by the always comprehensive Chris Coyier <a href="#ffn1">&#8617;</a></li>
	<li id="fn2"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering">https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering</a> <a href="#ffn2">&#8617;</a></li>
</ol>