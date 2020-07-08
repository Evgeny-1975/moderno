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

 var mixer = mixitup('.products__inner-box');


});

