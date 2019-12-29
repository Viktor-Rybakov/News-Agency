$(function(){
  let fixedMenu = $('.js-header-middle');
  let menuToTop = fixedMenu.offset().top;
  let docWidth = $(window).width();

  $(window).scroll(function() {
    if ( ($(window).scrollTop() > menuToTop) && (docWidth <= 768) ) {
      fixedMenu.addClass('fixed');
    } else {
      fixedMenu.removeClass('fixed');
    }
  });

  $(document).scroll(function() {
  console.log($(window).scrollTop())
  });

  console.log(fixedMenu.offset().top);
});