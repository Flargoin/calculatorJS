const select = (selectHeader, selectItem, selectSelector, activeClass) => {
  const selectTriggers = document.querySelectorAll(selectHeader),
        selectItems = document.querySelectorAll(selectItem),
        elSelect = document.querySelectorAll(selectSelector);

  // Элементы блока расчёта
  const calcQuantity = document.querySelector("#calculator__window-count"),
        calcPlace = document.querySelector("#calculator__place"),
        calcHouseType = document.querySelector("#calculator__house-type"),
        calcTotalPrice = document.querySelector("#calculator__total-price");

  /* Функции */
  // Удаление активного класса
  const selectClose = function () {
    elSelect.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  // Открытие-закрытие селекта
  const selectToggle = function () {
    selectClose();

    if(!this.classList.contains(activeClass)) {
      this.parentElement.classList.add(activeClass);
    }
  };

  // Выбор option из селекта
  const selectChoose = function () {
    let text = this.textContent,
        currentText = this.closest(selectSelector).querySelector(".select__current");
        currentText.textContent = text;

    if(this.closest("#calc-place-select")) {
      calcPlace.textContent = text;
    } else {
      calcHouseType.textContent = text;
    }

    selectClose();
  };


  /* Обработчики */
  // Обработчик события клика на селект, для открытия и закрытия
  selectTriggers.forEach(trigger => {
    trigger.addEventListener("click", selectToggle);
  });

  // Обработчик выбора option
  selectItems.forEach(item => {
    item.addEventListener("click", selectChoose);
  });

  // Обработчик клика вне селекта
  window.addEventListener('click', event => {
    const target = event.target;
    if (!target.closest(selectSelector) && !target.closest(selectHeader)) {
      selectClose();
    }
  });
}

export default select;
