import noUiSlider from 'nouislider';

const slider = (rangeSelector, rangeStart, rangeMin, rangeMax) => {
  const rangeSlider = document.getElementById(rangeSelector);

  noUiSlider.create(rangeSlider, {
    start: rangeStart,
    connect: true,
    tooltips: true,
    step: 1,
    format: {
      to: function ( value ) {
        return value.toFixed();;
      },
      from: function ( value ) {
        return value;
      }
    },
    range: {
        'min': rangeMin,
        'max': rangeMax
    }
  });
}

export default slider;

