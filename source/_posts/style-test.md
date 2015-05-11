title: "A Full and Comprehensive Style Test"
art:
arttext:
date: 2014-03-24 17:20:30
tags:
- design
categories:
- articles
---
Below is just about everything you’ll need to style in the theme. Check the source code to see the many embedded elements within paragraphs.

<!-- more -->
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

***

Lorem ipsum dolor sit amet, [text link](http://google.com) adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam. *This is emphasized*. Donec faucibus. Nunc iaculis suscipit dui. 5<sup>3</sup> = 125. Water is H<sub>2</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>New York Times</cite> (That's a citation). <span style="text-decoration:underline;">Underline.</span> Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

<abbr title="Hyper Text Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. To copy a file type `COPY filename`. ~~Dinner's at 5:00.~~ <ins>Let’s make that 7.</ins>

***

## Media

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

### Big Image

![Alt text](https://demo.ghost.io/content/images/2014/09/testimg1.jpeg "Optional title")

### Small Image

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

{% img class names https://demo.ghost.io/content/images/2014/09/testimg1.jpeg 100 100 'Title Text' 'Alt Text' %}

***

## List Types

### Definition List

<dl>
<dt>Definition List Title</dt>
<dd>This is a definition list division.</dd>
<dt>Definition</dt>
<dd>An exact statement or description of the nature, scope, or meaning of something: <em>our definition of what constitutes poetry.</em></dd>
</dl>

### Ordered List

1. List Item 1
1. List Item 2
  1. Nested list item A
  1. Nested list item B
1. List Item 3

### Unordered List

- List Item 1
- List Item 2
   - Nested list item A
   - Nested list item B
- List Item 3

***

## Table

| Table Header 1| Table Header 2| Table Header 3 |
|:------------- |:-------------:| --------------:|
| Division 1    | Division 2    | Division 3     |
| Division 1    | Division 2    | Division 3     |
| Division 1    | Division 2    | Division 3     |
| Division 1    | Division 2    | Division 3     |
| Division 1    | Division 2    | Division 3     |

## Preformatted Text

Typographically, preformatted text is not the same thing as code. Sometimes, a faithful execution of the text requires preformatted text that may not have anything to do with code. Most browsers use Courier and that’s a good default — with one slight adjustment, Courier 10 Pitch over regular Courier for Linux users.

### Code

Code can be presented inline, like `<?php bloginfo('stylesheet_url'); ?>`, or within a `<pre>` block. Because we have more specific typographic needs for code, we’ll specify Consolas and Monaco ahead of the browser-defined monospace font.

```css
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
```

***

## Blockquotes

Let’s keep it simple. Italics are good to help set it off from the body text. Be sure to style the citation.

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
“Every interaction is both precious and an opportunity to delight.”
{% endblockquote %}

And here’s a bit of trailing text.

***

## Text-level Semantics

The <a href="#">a element</a> example <br>
The <abbr>abbr element</abbr> and <abbr title="Title text">abbr element with title</abbr> examples <br>
The b element example <br>
The <cite>cite element</cite> example <br>
The <code>code element</code> example <br>
The <del>del element</del> example <br>
The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples <br>
The <em>em element</em> example <br>
The <i>i element</i> example <br>
The <ins>ins element</ins> example <br>
The <kbd>kbd element</kbd> example <br>
The <mark>mark element</mark> example <br>
The <q>q element <q>inside</q> a q element</q> example <br>
The <s>s element</s> example <br>
The <samp>samp element</samp> example <br>
The <small>small element</small> example <br>
The <span>span element</span> example <br>
The <strong>strong element</strong> example <br>
The <sub>sub element</sub> example <br>
The <sup>sup element</sup> example <br>
The <var>var element</var> example <br>
The <u>u element</u> example

***

## Forms

<form>
<fieldset>
<legend>Inputs as descendents of labels (form legend)</legend>
<label>
Text input
<input value="default value" type="text">
</label>
<label>
Email input
<input type="email">
</label>
<label>
Search input
<input type="search">
</label>
<label>
Tel input
<input type="tel">
</label>
<label>
URL input
<input placeholder="http://" type="url">
</label>
<label>
Password input
<input value="password" type="password">
</label>
<label>
File input
<input type="file">
</label>
<label>
Radio input
<input name="rad" type="radio">
</label>
<label>
Checkbox input
<input type="checkbox">
</label>
<label>
<input name="rad" type="radio"> Radio input
</label>
<label>
<input type="checkbox"> Checkbox input
</label>
<label>
Select field
<select>
<option>Option 01</option>
<option>Option 02</option>
</select>
</label>
<label>
Textarea
<textarea cols="30" rows="5">Textarea text</textarea>
</label>
</fieldset>

<fieldset>
<legend>Clickable inputs and buttons</legend>
<input src="http://placekitten.com/90/24" alt="Image (input)" type="image">
<input value="Reset (input)" type="reset">
<input value="Button (input)" type="button">
<input value="Submit (input)" type="submit">
<button type="reset">Reset (button)</button>
<button type="button">Button (button)</button>
<button type="submit">Submit (button)</button>
</fieldset>

<fieldset id="boxsize">
<legend>box-sizing tests</legend>
<div><input value="text" type="text"></div>
<div><input value="email" type="email"></div>
<div><input value="search" type="search"></div>
<div><input value="http://example.com" type="url"></div>
<div><input value="password" type="password"></div>

<div><input value="#000000" type="color"></div>
<div><input value="5" type="number"></div>
<div><input value="10" type="range"></div>
<div><input value="1970-01-01" type="date"></div>
<div><input value="1970-01" type="month"></div>
<div><input value="1970-W01" type="week"></div>
<div><input value="18:23" type="time"></div>
<div><input value="1970-01-01T00:00:00Z" type="datetime"></div>
<div><input value="1970-01-01T00:00" type="datetime-local"></div>

<div><input type="radio"></div>
<div><input type="checkbox"></div>

<div><select><option>Option 01</option><option>Option 02</option></select></div>
<div><textarea cols="30" rows="5">Textarea text</textarea></div>

<div><input src="http://placekitten.com/90/24" alt="Image (input)" type="image"></div>
<div><input value="Reset (input)" type="reset"></div>
<div><input value="Button (input)" type="button"></div>
<div><input value="Submit (input)" type="submit"></div>

<div><button type="reset">Reset (button)</button></div>
<div><button type="button">Button (button)</button></div>
<div><button type="submit">Submit (button)</button></div>
</fieldset>
</form>

***

## Embeds

Sometimes all you want to do is embed a little love from another location and set your post alive.

### Video

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div class="media-full">
  {% youtube xFEN7BQ7Zus %}
</div>

Culpa qui officia deserunt mollit anim id est laborum.

{% vimeo 124038805 %}

## Code

{% jsfiddle hmw2518t js,html,css,result default 100% 340 %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.