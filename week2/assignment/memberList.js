import {
  deleteMember,
  addMember,
  validateInput,
} from "./utils/editMemberList.js";
import { getLocalStorageMembersData, renderMemberList } from "./utils/renderMemberList.js";
import {
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

renderMemberList(getLocalStorageMembersData());
setupCheckbox();
setupModal();

// 데이터 필터링
const filterSearchBtn = document.querySelector(".filter-search-button");
filterSearchBtn.addEventListener("click", () => {
  renderMemberList(filterMemberList());
});

// 필터 초기화
const filterResetBtn = document.querySelector(".filter-reset-button");
filterResetBtn.addEventListener("click", () => {
  initializeFilterValue();
  renderMemberList(getLocalStorageMembersData());
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
    renderMemberList(newMemberList);
    closeModal();
  } else {
    alert("모든 값을 입력하세요.");
  }
});
