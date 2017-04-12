---
title:  "2.4 Column"
handle: "column"
date:   2017-03-19 12:30:32 +1100
category: 'The Grid'
---

The `column` class does not _need_ to be nested within a `row` . However rows counteract column padding with negative margins.
{% highlight html %}
  <!-- These columns are not using row they will be indented by $gutter -->
  <div class="container">
    <div class="column"></div>
    <div class="column"></div>
  </div>

  <!-- These columns are using row they will fill the width of the container -->
  <div class="container">
    <div class="row">
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
{% endhighlight %}
Once you have defined a `column` you can set how many columns wide you want it for which breakpoint.

By default Concrete is a twelve column layout. This is easily modified. You can find out how on the styles page.
{% highlight html %}
  <div class="container">
    <div class="row">
   <!-- 4 on large, 2 on medium, 1 on small -->
   <div class="column l3 m6 s12"></div>
   <div class="column l3 m6 s12"></div>
   <div class="column l3 m6 s12"></div>
   <div class="column l3 m6 s12"></div>
   </div>
  </div>
{% endhighlight %}

By default Concrete is actually desktop first, however many people prefer to work mobile first: Concrete is easily adapted to do this. You can find out how on the styles page.
{% highlight html %}
  <!-- by default concrete is desktop first -->
  <div class="container">
    <div class="row">
   <!-- 4 on large, 4 on medium, 4 on small -->
   <div class="column l3"></div>
   <div class="column l3"></div>
   <div class="column l3"></div>
   <div class="column l3"></div>
   </div>
  </div>

  <div class="container">
    <div class="row">
   <!-- 1 on large, 1 on medium, 4 on small -->
   <div class="column s3"></div>
   <div class="column s3"></div>
   <div class="column s3"></div>
   <div class="column s3"></div>
   </div>
  </div>
{% endhighlight %}
