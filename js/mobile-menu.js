$(function(){

  let mobileMenuButton = $('.js-mobile-menu-button');
  let mobileMenu = $('#menu');

  mobileMenuButton.on('click', function() {
    mobileMenu.toggleClass('header-menu--mobile');

    if ( mobileMenuButton.attr('aria-expanded') === 'false' ) {
      mobileMenuButton.attr('aria-label', 'Закрыть меню');
      mobileMenuButton.attr('aria-expanded', 'true');
      mobileMenuButton.addClass('mobile-menu-button--open')
    } else {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button--open');
    }
  });

  $(window).resize( function(){
    let docWidth = $(window).width();

    if (docWidth > 768) {
      mobileMenu.removeClass('header-menu--mobile');
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
      mobileMenuButton.removeClass('mobile-menu-button--open');
    }
  });
})