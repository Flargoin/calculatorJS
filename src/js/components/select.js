const select = (selector) => {
  const selectEl = document.querySelectorAll(selector),
        selectOptionPlace = document.querySelectorAll("#select-dropdown-place li"),
        selectOptionType = document.querySelectorAll("#select-dropdown-type li"),
        selectCurrentValue = document.querySelectorAll(".select-button");

  console.log(selectCurrentValue);

  selectEl.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("is-active");
    });
  });

  selectOptionPlace.forEach(option => {
    option.addEventListener("click", (event) => {
      selectCurrentValue.textContent = event.target.textContent;
    });
  });

  selectOptionType.forEach(option => {
    option.addEventListener("click", (event) => {
      selectCurrentValue.textContent = event.target.textContent;
    });
  });

}

export default select;
