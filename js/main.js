$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 4,
    adaptiveHeight: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1
        }
      }
    ]
  });
});