import { initializeModalValue } from "./utils/initialize.js";

// 모달 기능
const openModalBtn = document.querySelector(".modal-open-button");
const addMemberModal = document.querySelector(".add-member-modal");
const closeModalBtn = document.querySelector(".modal-close-button");

export const openModal = () => {
  addMemberModal.showModal();
};

export const closeModal = () => {
  addMemberModal.close();
};

export const setupModal = () => {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", () => {
    closeModal();
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
      closeModal();
    }
  });
};
