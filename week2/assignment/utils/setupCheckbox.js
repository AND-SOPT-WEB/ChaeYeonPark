export const setupCheckbox = () => {
  const headerCheckbox = document.querySelector(".table-header-checkbox");
  const filterCheckboxAll = document.querySelectorAll(".filter-checkbox");

  // 체크박스 전체선택
  headerCheckbox.addEventListener("click", () => {
    filterCheckboxAll.forEach((checkbox) => {
      checkbox.checked = headerCheckbox.checked;
    });
  });

  // 체크박스 개별선택
  filterCheckboxAll.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      headerCheckbox.checked = [...filterCheckboxAll].every(
        (checkbox) => checkbox.checked
      );
    });
  });
};
