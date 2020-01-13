$(function(){

  let seachFormInput = $('.js-search-form__input');
  let searchFormButton= $('.js-search-form__button');
  let searchFormButtonMobile = $('.js-search-form__button_mobile');
  let headerLogo = $('.js-header-logo');
  let headerFix = $('.js-header-middle');

  searchFormButtonMobile.on('click', function(){
    if ( $(window).width() <= 560 ) {
      seachFormInput.show();
      searchFormButton.show();
      headerLogo.hide();
      searchFormButtonMobile.hide();
    }
  });
});