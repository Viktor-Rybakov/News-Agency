$(function(){

  let mobileMenuButton = $('.js-mobile-menu-button');
  let mobileMenu = $('.js-header-menu');
  let headerFix = $('.js-header-middle');

// Открываем меню при клике на кнопку

  mobileMenuButton.on('click', function() {
    mobileMenu.toggleClass('header-menu_open');
    let menuPosition;

    if (headerFix.hasClass('header-middle_mobile-fix')) {
      menuPosition = headerFix.position().top + headerFix.innerHeight();
    }
    else {
      menuPosition = headerFix.position().top + headerFix.innerHeight() - $(window).scrollTop();
    }

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

  $(window).resize(function(){
    let docWidth = $(window).width();

    if (docWidth > 768) {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button_open');
      mobileMenu.removeClass('header-menu_open');
      mobileMenu.removeAttr('style');
    }
  });

// Закрываем меню при клике вне его

  $(document).click(function (e) {
    if ( !mobileMenuButton.children().addBack().is(e.target) && !mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button_open');
      mobileMenu.removeClass('header-menu_open');
      mobileMenu.removeAttr('style');
    }
  });

// Закрываем меню при скролле, если хедер не закреплен (вверху страницы)

  $(window).scroll(function(){
    if ( !headerFix.hasClass('header-middle_mobile-fix') ) {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button_open');
      mobileMenu.removeClass('header-menu_open');
      mobileMenu.removeAttr('style');
    }
  });

});