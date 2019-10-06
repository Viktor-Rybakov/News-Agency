$(function(){

  var dollarRateElem = $('.js-dollar-rate');
  var euroRateElem = $('.js-euro-rate');
  var exhangeRateElem = $('.js-exhange-rate');

  $.get('http://data.fixer.io/api/latest',
    {'access_key': '93e07e94dae55ca0b24ea3f9a672a975'},
    function(response){

      if (response.success === true) {
        exhangeRateElem.removeClass('hidden');

        $('.js-news-list__heading').css(
          'margin-bottom', '10px'
        );

        $('.js-news-list__item').css(
          'margin-bottom', '12px'
        );

        $('.js-button').css(
          'margin-bottom', '10px',
          'margin-top', '23x'
        );

        var rateRubEuro = response.rates.RUB;
        var rateUsdEuro = response.rates.USD;
        var rateRubUsd = (rateRubEuro / rateUsdEuro);

        euroRateElem.text(rateRubEuro.toFixed(2) + ' руб.'); 
        dollarRateElem.text(rateRubUsd.toFixed(2) + ' руб.');
      };

  });

});