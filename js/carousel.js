$(document).ready(function(){
  $(".news__slider").owlCarousel({
    items: 3,
    autoWidth: true,
    margin: 60,
    nav: true,
    dots: false
  });

  $(".new-books__slider").owlCarousel({
    items: 3,
    nav: true,
    dots: false
  });
});