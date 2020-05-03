$(document).ready(function () {

  $('.smart-basket__wrapper').smbasket({
    productElement: 'menu_pizza__item',
    buttonAddToBasket: 'btn_order',
    countryCode: '+7',
    smartBasketCurrency: '₽',
    productSize: 'size__item',
    smartBasketMinArea: 'cart',
    productPrice: 'product__price-number',
    productQuantityWrapper: 'product__quantity',
    telIsRequired: false,
    emailIsRequired: true,
    agreement: {
      isRequired: true,
      isChecked: true,
      isLink: 'https://smartlanding.biz'
    }
  });

  // $(".cart").click(function (e) {
  //   e.preventDefault();
  //   $(".smart-basket").toggleClass("smart-basket_active");
  // });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

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
  var mixer = mixitup('.mixitup-2');

  $(".menu_tabs__item").click(function (e) {
    $(".menu_tabs__item").removeClass("active");
    $(this).addClass("active");
    let posTabs = $(this).addClass("active").index();
    $(".menu_tabs__content").removeClass("active");
    $(".menu_tabs__content").eq(posTabs).addClass("active");
  });
});

function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3","error");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 7000);
    }
  });
}

function func() {
  $("p.mt-3").detach();
}
$('#descount').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('messegeResult-descount', 'descount', '../descount.php');
});

$('#subscribe').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('messegeResult-subscribe', 'subscribe', '../subscribe.php');
});