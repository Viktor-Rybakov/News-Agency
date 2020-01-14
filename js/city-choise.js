$(function() {
  let cityChoiseWindow = $('.js-city-choise');
  let cityChoiseButton = $('.js-close-button');
  let currentCity = $('.js-current-city');
  let currentCityText = $('.js-current-city__text');
  let body = $('body');
  let city;

  //Открытие модального окна

  currentCity.on('click', function(){
    event.preventDefault();

    cityChoiseWindow.toggleClass('city-choise_open');
    cityChoiseWindow.toggleClass('city-choise_close');
    cityChoiseButton.attr('aria-expanded', 'true');
    cityChoiseWindow.attr('aria-modal', 'true');
    body.addClass('modal-active');
  });

  //Закрытие модального окна при нажатии кнопки "закрыть"

  cityChoiseButton.children().addBack().on('click', function() {
    cityChoiseWindow.toggleClass('city-choise_open');
    cityChoiseWindow.toggleClass('city-choise_close');
    cityChoiseButton.attr('aria-expanded', 'false');
    cityChoiseWindow.attr('aria-modal', 'false');
    body.removeClass('modal-active');
  });

  //Выбор значения и закрытие модального окна

  cityChoiseWindow.children().on('click', function(e) {
    city = $(e.target).data('city');
    currentCityText.html(city);
    cityChoiseWindow.toggleClass('city-choise_open');
    cityChoiseWindow.toggleClass('city-choise_close');
    cityChoiseButton.attr('aria-expanded', 'false');
    cityChoiseWindow.attr('aria-modal', 'false');
    body.removeClass('modal-active');
  });

  //Закрытие модального окна при клике вне его

  $(document).click(function (e) {
    if ( cityChoiseWindow.hasClass('city-choise_open') && !currentCity.children().addBack().is(e.target) && !cityChoiseButton.is(e.target) && !cityChoiseWindow.is(e.target) && cityChoiseWindow.has(e.target).length === 0) {
      cityChoiseWindow.toggleClass('city-choise_open');
      cityChoiseWindow.toggleClass('city-choise_close');
      cityChoiseButton.attr('aria-expanded', 'false');
      cityChoiseWindow.attr('aria-modal', 'false');
      body.removeClass('modal-active');
    }
  });

});