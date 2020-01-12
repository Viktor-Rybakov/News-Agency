$(function(){

  let mobileMenuButton = $('.js-mobile-menu-button');
  let mobileMenu = $('.js-header-menu');

// Открываем меню при клике на кнопку

  mobileMenuButton.children().addBack().on('click', function() {
    mobileMenu.toggleClass('modal');
    let menuPosition = $('.js-header-middle').position().top + $('.js-header-middle').innerHeight();

    if ( mobileMenuButton.attr('aria-expanded') === 'false' ) {
      mobileMenuButton.attr('aria-label', 'Закрыть меню');
      mobileMenuButton.attr('aria-expanded', 'true');
      mobileMenuButton.addClass('mobile-menu-button_open');
      mobileMenu.css('top', menuPosition);
    } else {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button_open');
      mobileMenu.removeAttr('style');
    }
  });

// Закрываем меню, если ширина окна стала больше, чем 768 пикселей

  $(window).resize( function(){
    let docWidth = $(window).width();

    if (docWidth > 768) {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button_open');
      mobileMenu.removeClass('modal');
      mobileMenu.removeAttr('style');
    }
  });

// Закрываем меню при клике вне его

  $(document).click(function (e) {
    if ( !mobileMenuButton.children().addBack().is(e.target) && !mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button_open');
      mobileMenu.removeClass('modal');
      mobileMenu.removeAttr('style');
    }
  });
});