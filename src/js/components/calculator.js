import noUiSlider from 'nouislider';

const calculator = () => {

  const rangeSlider = document.querySelector('#range-slider');

  let calcQuantity = document.querySelector("#calculator__window-count");

  // Создание range slider
  noUiSlider.create(rangeSlider, {
    start: 3,
    connect: "upper",
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
        'min': 1,
        'max': 10
    }
  });

  // Цены от 1 до 10 штук Панельно/блочный дом
  const block = [2035, 3245, 4345, 5665, 6875, 8085, 9295, 10505, 11715, 12925];
  // Цены от 1 до 10 штук Кирпичный с одинарной рамой
  const brickOne = [ 2310, 3520, 4730, 5940, 7150, 8360, 9570, 10780, 13145, 14190];
  // Цены от 1 до 10 штук Кирпичный с двойной рамой
  const brickTwo = [ 3245, 5808, 8580, 10945, 13530, 16115, 17545, 20185, 22275, 23595 ];

  const place = {
      fiveKm : 400,
      tenKm : 900,
      fifKm : 1500,
  };

  // взаимодействие с интерфесомкол-во окон
  rangeSlider.noUiSlider.on("update", () => {
    calcQuantity.textContent = rangeSlider.noUiSlider.get();
  });

/*   function calculate() {
    const placeCurrent = document.querySelector("#calc-place-select .select__current"),
          typeCurrent = document.querySelector("#calc-type-select .select__current");
          placeEl = document.querySelector('#calculator__place'),
          typeEl = document.querySelector('#calculator__house-type');

    let placePrice = 0,
        sum = 0,
        countPrice =

    if(placeCurrent.textContent == "до 5 км от МКАД") {
      placePrice = 400;
    } else if(placeCurrent.textContent == "до 10 км от МКАД") {
      placePrice = 900;
    } else if(placeCurrent.textContent == "до 15 км от МКАД") {
      placePrice = 1500;
    } else {
      placePrice = 0;
    }

    if(typeCurrent.textContent == "Кирпичный с одинарной рамой") {

    }
  } */

}

export default calculator;

