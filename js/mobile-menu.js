$(function(){

  var mobileMenuButton = $('.js-mobile-menu-button');
  var mobileMenu = $('#menu');
  var headerMenuList = $('.header-menu__list');
  var headerMenuItem = $('.header-menu__item');
  var headerMenuItemLink = $('.header-menu__item-link');

  mobileMenuButton.on('click', function() {
    mobileMenu.toggleClass('header-bottom header-menu fix-container mobile-menu');
    headerMenuList.toggleClass('header-menu__list mobile-menu__list');
    headerMenuItem.toggleClass('header-menu__item mobile-menu__item');
    headerMenuItemLink.toggleClass('header-menu__item-link mobile-menu__item-link');

    if ( mobileMenuButton.attr('aria-expanded') === 'false' ) {
      mobileMenuButton.attr('aria-label', 'Закрыть меню');
      mobileMenuButton.attr('aria-expanded', 'true');
    } else {
      mobileMenuButton.attr('aria-label', 'Открыть меню');
      mobileMenuButton.attr('aria-expanded', 'false');
    }
  });

})