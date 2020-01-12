$(function(){
  let fixedMenu = $('.js-header-middle');
  let datetime = $('.js-datetime');
  let weather = $('.js-weather');
  let currentCity = $('.js-current-city');
  let menuToTop = fixedMenu.offset().top;
  let menuHeight = fixedMenu.innerHeight();
  let menuToBottom = menuToTop + menuHeight;
  let docWidth = $(window).width();
  let main = $('.main');

// Закрепление панели меню наверху при скролле

  $(window).scroll(function() {
    if ( ($(window).scrollTop() > menuToBottom) && (docWidth <= 768) ) {
      fixedMenu.addClass('fixed');
      fixedMenu.css({
        "padding-bottom": "13px",
        "background": "none",
        "background-color": "#ffffff",
      });
      main.css('margin-top', menuHeight);
      datetime.hide();
      weather.hide();
      currentCity.hide();
    } else {
      fixedMenu.removeClass('fixed');
      fixedMenu.removeAttr('style');
      main.removeAttr('style');
      datetime.show();
      weather.show();
      currentCity.show();
    }
  });
  
});