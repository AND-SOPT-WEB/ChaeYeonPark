// 검색필터 초기화
const filterInputName = document.querySelector(".filter-input-name");
const filterInputEngName = document.querySelector(".filter-input-engname");
const filterInputGithub = document.querySelector(".filter-input-github");
const filterInputGender = document.querySelector(".filter-input-gender");
const filterInputRole = document.querySelector(".filter-input-role");
const filterInputWeek1 = document.querySelector(".filter-input-week1");
const filterInputWeek2 = document.querySelector(".filter-input-week2");

export const initializeFilterValue = () => {
  filterInputName.value = "";
  filterInputEngName.value = "";
  filterInputGithub.value = "";
  filterInputGender.value = "";
  filterInputRole.value = "";
  filterInputWeek1.value = "";
  filterInputWeek2.value = "";
};

// 모달 초기화
const modalInputName = document.querySelector(".modal-input-name");
const modalInputEngName = document.querySelector(".modal-input-engname");
const modalInputGithub = document.querySelector(".modal-input-github");
const modalInputGender = document.querySelector(".modal-input-gender");
const modalInputRole = document.querySelector(".modal-input-role");
const modalInputWeek1 = document.querySelector(".modal-input-week1");
const modalInputWeek2 = document.querySelector(".modal-input-week2");

export const initializeModalValue = () => {
  modalInputName.value = "";
  modalInputEngName.value = "";
  modalInputGithub.value = "";
  modalInputGender.value = "";
  modalInputRole.value = "";
  modalInputWeek1.value = "";
  modalInputWeek2.value = "";
};

// 체크박스 초기화
const headerCheckbox = document.querySelector(".table-header-checkbox");
const filterCheckboxAll = document.querySelectorAll(".filter-checkbox");

export const initializeCheckbox = () => {
  headerCheckbox.checked = false;
  filterCheckboxAll.forEach((checkbox) => (checkbox.checked = false));
};
