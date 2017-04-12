---
title:  "2.2 Container"
handle: "container"
date:   2017-03-13 12:30:32 +1100
category: 'The Grid'
---
The `container` class is used to stop elements from touching the edges of the window. The `container` class has a maximum width which is set by the `$l` breakpoint variable. If you do not wish to be constrained to this width you can add the `full` class the full class does still apply the `$gutter` as a margin so will not touch the window edges. If you want your element to touch the window edges check out the Full Width example.
{% highlight html %}
  <!-- This element is full width and will touch the screen edges -->
  <div></div>

  <!-- This element is full width but has a $gutter margin -->
  <div class="container"></div>

  <!-- This element is has a max-width of the $l breakpoint -->
  <div class="container l"></div>
    
  <!-- This element is has a max-width of the $s breakpoint -->
  <div class="container s"></div>
{% endhighlight %}
