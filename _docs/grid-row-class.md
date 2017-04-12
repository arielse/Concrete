---
title:  "2.3 Row"
handle: "row"
date:   2017-03-14 12:30:32 +1100
category: 'The Grid'
---

The `row` class does not need to be nested within a `container` . However rows provide spacing below to differentiate `div` isions within a container. They also help align child column grids with negative margins.
{% highlight html %}
  <!-- This will work -->
  <div>
    <div class="row"></div>
  </div>
  <!-- This will also work -->
  <div class="container">
    <div class="row"></div>
  </div>
{% endhighlight %}

By default the row class has a bottom margin equal to `$gutter` , you will find that in some scenarios this is not desired. Adding a class of `.collapse` to the row with remove this.
{% highlight html %}
  <!-- This will have a bottom margin equal to $gutter -->
  <div class="row"></div>

  <!-- This will not have a bottom margin -->
  <div class="row collapse"></div>
{% endhighlight %}
