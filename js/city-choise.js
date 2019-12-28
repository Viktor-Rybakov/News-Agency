$(function() {
  let cityChoiseWindow = $('.js-city-choise');
  let cityChoiseButton = $('.js-close-button');
  let currentCity = $('.js-current-city');
  let currentCityText = $('.js-current-city__text');
  let city;

  currentCity.on('click', function(){
    event.preventDefault();

    cityChoiseWindow.addClass('modal');
    cityChoiseButton.attr('aria-expanded', 'true');
  });

  cityChoiseButton.children().addBack().on('click', function() {
    cityChoiseWindow.removeClass('modal');
    cityChoiseButton.attr('aria-expanded', 'false');
  });

  cityChoiseWindow.children().on('click', function(e) {
    city = $(e.target).data('city');
    currentCityText.html(city);
    cityChoiseWindow.removeClass('modal');
    cityChoiseButton.attr('aria-expanded', 'false');
  });

  $(document).click(function (e) {
    if ( !currentCity.children().addBack().is(e.target) && !cityChoiseButton.is(e.target) && !cityChoiseWindow.is(e.target) && cityChoiseWindow.has(e.target).length === 0) {
      cityChoiseWindow.removeClass('modal');
      cityChoiseButton.attr('aria-expanded', 'false');
    }
  });

});