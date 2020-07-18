$(function () {

   $(".rate-star").rateYo({
      rating: 5,
      readOnly: true,
      starWidth: "12px"
   });

   $('.product-slider__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
      //autoplay: true,
      //autoplaySpeed: 2000
   });

   $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
   });


   $('.icon-th-list').on('click', function(){
      $('.products__item').addClass('list');
      $('.icon-th-list').addClass('activ');
      $('.icon-th-large').removeClass('activ');
   });
   $('.icon-th-large').on('click', function(){
      $('.products__item').removeClass('list');
      $('.icon-th-large').addClass('activ');
      $('.icon-th-list').removeClass('activ');
   });

   //burger
   $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
   });
   
   $('.header__btn-menu').on('click', function(){
      $('.header__box').toggleClass('active');
   });
   

   var mixer = mixitup('.products__inner-box');


});