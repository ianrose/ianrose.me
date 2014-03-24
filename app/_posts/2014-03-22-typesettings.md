---
layout: post
title:  "A Sass Type Toolkit: Typesettings"
date:   2014-03-23 21:29:37
categories: sass
excerpt: Set your type in Ems with modular scale, vertical rhythm, and responsive ratio based headlines using Sass. Why create another type toolkit in Sass? I wanted to and I couldn’t find exactly what I was looking for. Typesettings uses techniques from many different amazing tools while trying to keep it simple.
---

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight scss %}
body {
  background-color: red;
}

.div {
  color: $var-color;
  @include emRhythm(3);
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
