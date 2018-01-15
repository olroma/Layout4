$(document).ready(function(){
  $(".news__slider").owlCarousel({
    items: 3,
    autoWidth: false,
    margin: 60,
    nav: true,
    dots: false,
    responsive : {
      1700: {
        items: 3,
        autoWidth: true
      },
      1250: {
        items: 3
      },
      860: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  });

  $(".new-books__slider").owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    autoWidth: true
  });
});