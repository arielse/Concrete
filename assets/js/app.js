// // Add code copy button
// $(window).on('load', function() {
//   $('figure.highlight').each(function(index) {
//     $(this).prepend('<button class="copy">Copy to clipboard</button>')
//   })
// })

// Sticky sidebar
$(window).on('scroll load resize', function() {
  var header = $('header').outerHeight()
  var scrollTop = $(document).scrollTop()
  if(scrollTop > header) {
    $('aside.sidebar > div').addClass('fixed')
  } else {
    $('aside.sidebar > div').removeClass('fixed')
  }
})

// Scroll Spy Events
$('article.anchor').on('scrollSpy:enter', function() {
  var id = $(this).attr('id')
  $('.sidebar [data-handle="'+ id +'"].dropdown-menu').addClass('active')
})
$('article.anchor').on('scrollSpy:exit', function() {
  var id = $(this).attr('id')
  $('.sidebar [data-handle="'+ id +'"].dropdown-menu').removeClass('active')
})

$('.content.anchor').on('scrollSpy:enter', function() {
  var id = $(this).attr('id')
  $('.sidebar [href="#'+ id +'"]').addClass('active')
})
$('.content.anchor').on('scrollSpy:exit', function() {
  var id = $(this).attr('id')
  $('.sidebar [href="#'+ id +'"]').removeClass('active')
})
$('.anchor').scrollSpy()

// Initiate smooth scrollSpy
smoothScroll.init()

// Copy to clipboard
function copyToClipboard(elementId) {
  // Create a "hidden" input
  var aux = document.createElement("input");
  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  // Append it to the body
  document.body.appendChild(aux);
  // Highlight its content
  aux.select();
  // Copy the highlighted text
  document.execCommand("copy");
  // Remove it from the body
  document.body.removeChild(aux);
}
