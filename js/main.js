$(function(){
    $('#one-head').click(function(){
        $('#one').slideToggle().toggleClass('active');
        $('#two, #three, #four, #five, #six').removeClass('active').slideUp();
    })
    $('#two-head').click(function(){
        $('#two').slideToggle().toggleClass('active');
        $('#one, #three, #four, #five, #six').removeClass('active').slideUp();
    })
    $('#three-head').click(function(){
        $('#three').slideToggle().toggleClass('active');
        $('#one, #two, #four, #five, #six').removeClass('active').slideUp();                     //Аккордеон на faq
    })
    $('#four-head').click(function(){
        $('#four').slideToggle().toggleClass('active');
        $('#one, #two, #three, #five, #six').removeClass('active').slideUp();
    })
    $('#five-head').click(function(){
        $('#five').slideToggle().toggleClass('active');
        $('#one, #two, #three, #four, #six').removeClass('active').slideUp();
    })
    $('#six-head').click(function(){
        $('#six').slideToggle().toggleClass('active');
        $('#one, #two, #three, #four, #five').removeClass('active').slideUp();
    })
});

$(function(){
  $('.just_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
     {
       breakpoint: 1180,
        settings: {
         slidesToShow: 3,
         arrows: false,
         slidesToScroll: 1,                      //Слайдер "Отзывы"
         infinite: true,
         dots: false
       }
     },
     {
        breakpoint: 883,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  $('.slick-slide').css({'margin':'0 10px 0 10px'});
});

$(function(){
  $('.burger').click(function(){
    $('nav').css('display', 'flex');            //Бургер
  });
  $('.x').click(function(){
      $('nav').hide();
  });
});

/*$(document).ready(function () {
  $('nav a').on("click", function (event) {
    event.preventDefault();

    var targetClass = $(this).data("target");
    var target = $(targetClass);

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        600
      );
    }
  });
});*/
function smoothScroll(selector) {
  $(document).ready(function () {
    $(selector).on("click", function (event) {
      event.preventDefault();

      var targetClass = $(this).data("target");          //Авто скроллинг по клику
      var target = $(targetClass);

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          600
        );
      }
    });
  });
}
smoothScroll("nav a");
smoothScroll(".buy_but a");

function closeMenuOnClick() {
  $(document).ready(function () {
    $("nav a").on("click", function () {        //Закрытие бургера при клике на навигационную ссылку (при экране 767px)
      if ($(window).width() <= 767) {
        $(".x").trigger("click");
      }
    });
  });
}
closeMenuOnClick();

$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 74) {
            $('header').addClass('active');         //Проявление меню по скролу
        } else {
            $('header').removeClass('active');
        }
    });
});
$(function() {
    function notRealSite(element) {
        $(element).click(function() {
            $('.notReal').show(100);
            return false;
        });
    }
    $('.notReal_close').click(function() {         //Окошко "Page is not real"
        $('.notReal').hide(100);
    });
    notRealSite('.logo');
    notRealSite('.part1 a');
    notRealSite('.first_left a');
    notRealSite('.part2 a');
    notRealSite('.license');
    notRealSite('.ourprod_gray_bord a');
    notRealSite('.your_que_right a');
});