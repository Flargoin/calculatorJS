const select = (selectHeader, selectItem, selectSelector, activeClass) => {
  const selectTriggers = document.querySelectorAll(selectHeader),
        selectItems = document.querySelectorAll(selectItem),
        elSelect = document.querySelectorAll(selectSelector);

  /* Функции */
  // Удаление активного класса
  const selectClose = function () {
    elSelect.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  // Открытие-закрытие селекта
  const selectToggle = function () {
    // При открытии второго и более селектов, предыдущие будут закрываться.
    selectClose();
    this.parentElement.classList.toggle(activeClass);
  };

  // Выбор option из селекта
  const selectChoose = function () {
    let text = this.textContent,
        currentText = this.closest(".select").querySelector(".select__current");
        currentText.textContent = text;
        selectClose();
  };


  /* Обработчики */
  // Обработчик события клика на селект, для открытия и закрытия
  selectTriggers.forEach(selectTrigger => {
    selectTrigger.addEventListener("click", selectToggle);
  });

  // Обработчик выбора option
  selectItems.forEach(item => {
    item.addEventListener("click", selectChoose);
  });

  // Обработчик клика вне селекта
  window.addEventListener('click', event => {
    const target = event.target;
    if (!target.closest(selectSelector) && !target.closest(selectHeader)) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      selectClose();
    }
  });
}

export default select;
