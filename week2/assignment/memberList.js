import { deleteMember, addMember } from "./utils/editMemberList.js";
import { renderMemberList } from "./utils/renderMemberList.js";
import { initializeModalValue, initializeFilterValue } from "./utils/initialize.js";
import { filterMemberList } from "./utils/filterMemberList.js";
import { members } from "./data/memberData.js";

// 초기설정 
if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

// 데이터 렌더링
const membersData = JSON.parse(localStorage.getItem("membersData"));
renderMemberList(membersData);

// 데이터 필터링
const filterSearchBtn = document.querySelector(".filter-search-button");
filterSearchBtn.addEventListener("click", () => {
  renderMemberList(filterMemberList(membersData));
});

// 필터 초기화
const filterResetBtn = document.querySelector(".filter-reset-button");
filterResetBtn.addEventListener("click", () => {
  initializeFilterValue();
  renderMemberList(membersData);
});

// 체크박스 전체선택
const headerCheckbox = document.querySelector(".table-header-checkbox");
const filterCheckboxAll = document.querySelectorAll(".filter-checkbox");

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

// 멤버 삭제
const deleteMemberBtn = document.querySelector(".member-delete-button");
deleteMemberBtn.addEventListener("click", () => {
  const updateMemberList = deleteMember();
  localStorage.setItem("membersData", JSON.stringify(updateMemberList));
  renderMemberList(updateMemberList);
});

// 모달 기능
const openModalBtn = document.querySelector(".modal-open-button");
const addMemberModal = document.querySelector(".add-member-modal");
const closeModalBtn = document.querySelector(".modal-close-button");

openModalBtn.addEventListener("click", () => {
  addMemberModal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  addMemberModal.close();
  initializeModalValue();
});

// 모달 백드롭
addMemberModal.addEventListener("click", (event) => {
  const target = event.target;
  const rect = target.getBoundingClientRect();
  if (
    rect.left > event.clientX ||
    rect.right < event.clientX ||
    rect.top > event.clientY ||
    rect.bottom < event.clientY
  ) {
    addMemberModal.close();
  }
});

// 멤버 추가
const addMemberBtn = document.querySelector(".add-member-button");
addMemberBtn.addEventListener("click", () => {
  const newMemberList = addMember();
  localStorage.setItem("membersData", JSON.stringify(newMemberList));
  addMemberModal.close();
  initializeModalValue();
  renderMemberList(newMemberList);
});
