$(document).ready(function () {

  $('.slider').slick();

  $('.testimonial-carousel').slick();

  $('.carousel-pizza').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.prev_pizza'),
    nextArrow: $('.next_pizza'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  

  $('.recommend-carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  var mixer = mixitup('.mixitup-1');


  $(".menu_tabs__item").click(function (e) {
    $(".menu_tabs__item").removeClass("active");
    $(this).addClass("active");
    let posTabs = $(this).addClass("active").index();
    $(".menu_tabs__content").removeClass("active");
    $(".menu_tabs__content").eq(posTabs).addClass("active");
  });
});