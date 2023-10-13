const select = (selectHeader, selectItem, selectSelector, activeClass) => {
  const selectTriggers = document.querySelectorAll(selectHeader),
        selectItems = document.querySelectorAll(selectItem),
        elSelect = document.querySelectorAll(selectSelector);

  // Удаление активного класса
  const selectClose = function () {
    elSelect.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  // Открытие-закрытие селекта
  const selectToggle = function () {
    this.parentElement.classList.toggle(activeClass);
  };

  // Выбор option из селекта
  const selectChoose = function () {
    let text = this.textContent,
        currentText = this.closest(".select").querySelector(".select__current");
        currentText.textContent = text;
        selectClose();
  };

  // Обработчик события клика на селект, для открытия и закрытия
  selectTriggers.forEach(selectTrigger => {
    selectTrigger.addEventListener("click", selectToggle);
  });

  // Обработчик выбора option
  selectItems.forEach(item => {
    item.addEventListener("click", selectChoose);
  });


}

export default select;
