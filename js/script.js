jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

if (window.innerWidth > 766) {
  $(window).scroll(function(){
    if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    };
  });
};
});
