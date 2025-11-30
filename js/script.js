$(function(){
  
    "use strict";
    

let menu_icon = $('.menu_icon');
menu_icon.on('click', function(){
    $('#menu ul').fadeToggle(200);
    $('.logo').toggleClass('logo_left');
});

 //menu
 let menu = $('.custom_menu').offset().top;

 $(window).scroll(function(){

     let ScrollWin = $(window).scrollTop();

     if(ScrollWin > menu){
         $('.custom_menu').addClass('menu_fixed');
     }
     else{
         $('.custom_menu').removeClass('menu_fixed');
     }
});
//banner
$('#banner').slick({
  arrows: false,
    //prevArrow: '<i class="fa fa-angle-left banner_arrow_left"></i>',
   //nextArrow: '<i class="fa fa-angle-right banner_arrow_right"></i>',
});
  // service_slide js
  $('.service_slide').slick({
    slidesToShow: 3,
    autoplay:true,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          },
        {
          breakpoint: 401,
          settings: {
            slidesToShow: 1
          }
        }
        
      ]
});

$(document).ready(function () {
  $('.pogoSlider').pogoSlider({
    autoplay: true,
    autoplayTimeout: 5000,
    displayProgess: true,
    preserveTargetSize: true,
    targetWidth: 1000,
    targetHeight: 300,
    responsive: true,
    nextArrow: '<span></span>'
  }).data('plugin_pogoSlider');
  });
});