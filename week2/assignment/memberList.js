import {
  deleteMember,
  addMember,
  validateInput,
} from "./utils/editMemberList.js";
import { renderMemberList } from "./utils/renderMemberList.js";
import {
  initializeModalValue,
  initializeFilterValue,
  initializeCheckbox,
} from "./utils/initialize.js";
import { filterMemberList } from "./utils/filterMemberList.js";
import { setupCheckbox } from "./utils/setupCheckbox.js";
import { members } from "./data/memberData.js";
import { closeModal, setupModal } from "./modal.js";

// 초기설정
if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

// 데이터 렌더링
const membersData = () => {
  return JSON.parse(localStorage.getItem("membersData"));
};

renderMemberList(membersData());
setupCheckbox();
setupModal();

// 데이터 필터링
const filterSearchBtn = document.querySelector(".filter-search-button");
filterSearchBtn.addEventListener("click", () => {
  renderMemberList(filterMemberList(membersData()));
});

// 필터 초기화
const filterResetBtn = document.querySelector(".filter-reset-button");
filterResetBtn.addEventListener("click", () => {
  initializeFilterValue();
  renderMemberList(membersData());
});

// 멤버 삭제
const deleteMemberBtn = document.querySelector(".member-delete-button");
deleteMemberBtn.addEventListener("click", () => {
  const updateMemberList = deleteMember();
  localStorage.setItem("membersData", JSON.stringify(updateMemberList));
  renderMemberList(updateMemberList);
  initializeCheckbox();
});

// 멤버 추가
const addMemberBtn = document.querySelector(".add-member-button");
addMemberBtn.addEventListener("click", () => {
  if (validateInput()) {
    const newMemberList = addMember();
    localStorage.setItem("membersData", JSON.stringify(newMemberList));
    closeModal();
    initializeModalValue();
    renderMemberList(newMemberList);
  } else {
    alert("모든 값을 입력하세요.");
  }
});
