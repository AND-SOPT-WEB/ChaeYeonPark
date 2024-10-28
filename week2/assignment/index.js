import { members } from "./memberData.js";

// 페이지가 로드되면 로컬스토리지에 memberData를 set
// memberData를 get 후 map돌려서 table 채우기

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}
// localStorage.setItem("membersData", JSON.stringify(members));

const membersData = JSON.parse(localStorage.getItem("membersData"));

const memberList = document.querySelector(".table-body");

const renderMemberList = (data) => {
  memberList.textContent = "";
  const memberListData = data.map((member) => {
    return `            
          <tr class="tr">
                    <td><input type="checkbox" class="filter-checkbox" /></td>
                    <td>${member.name}</td>
                    <td>${member.englishName}</td>
                    <td>${member.github}</td>
                    <td>${member.gender === "male" ? "남자" : "여자"}</td>
                    <td>${member.role}</td>
                    <td>${member.firstWeekGroup}</td>
                    <td>${member.secondWeekGroup}</td>
          </tr>
          `;
  });

  memberList.innerHTML += memberListData.join("");
};

renderMemberList(membersData);

// 검색버튼 > 필터링
const filterSearchBtn = document.querySelector(".filter-search-button");
const filterInputName = document.querySelector(".filter-input-name");
const filterInputEngName = document.querySelector(".filter-input-engname");
const filterInputGithub = document.querySelector(".filter-input-github");
const filterInputGender = document.querySelector(".filter-input-gender");
const filterInputRole = document.querySelector(".filter-input-role");
const filterInputWeek1 = document.querySelector(".filter-input-week1");
const filterInputWeek2 = document.querySelector(".filter-input-week2");

filterSearchBtn.addEventListener("click", () => {
  const filteredMemberList = membersData.filter((member) => {
    const {
      name,
      englishName,
      github,
      gender,
      role,
      firstWeekGroup,
      secondWeekGroup,
    } = member;

    const isNameFiltered = filterInputName.value
      ? name.includes(filterInputName.value)
      : true;
    const isEngNameFiltered = filterInputEngName.value
      ? englishName
          .toLowerCase()
          .includes(filterInputEngName.value.toLowerCase())
      : true;
    const isGithubFiltered = filterInputGithub.value
      ? github.toLowerCase().includes(filterInputGithub.value.toLowerCase())
      : true;
    const isGenderFiltered = filterInputGender.value
      ? gender === filterInputGender.value
      : true;
    const isRoleFiltered = filterInputRole.value
      ? role === filterInputRole.value
      : true;
    const isFirstWeekGroupFiltered = filterInputWeek1.value
      ? firstWeekGroup === Number(filterInputWeek1.value)
      : true;
    const isSecondWeekGroupFiltered = filterInputWeek2.value
      ? secondWeekGroup === Number(filterInputWeek2.value)
      : true;

    return (
      isNameFiltered &&
      isEngNameFiltered &&
      isGithubFiltered &&
      isGenderFiltered &&
      isRoleFiltered &&
      isFirstWeekGroupFiltered &&
      isSecondWeekGroupFiltered
    );
  });

  renderMemberList(filteredMemberList);
});

// 초기화 버튼 > 초기화
const filterResetBtn = document.querySelector(".filter-reset-button");

filterResetBtn.addEventListener("click", () => {
  filterInputName.value = "";
  filterInputEngName.value = "";
  filterInputGithub.value = "";
  filterInputGender.value = "";
  filterInputRole.value = "";
  filterInputWeek1.value = "";
  filterInputWeek2.value = "";

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

// 새 멤버 추가
const openModalBtn = document.querySelector(".modal-open-button");
const addMemberModal = document.querySelector(".member-modal");
const closeModalBtn = document.querySelector(".modal-close-button");

openModalBtn.addEventListener("click", () => {
  addMemberModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  addMemberModal.style.display = "none";
});

const addMemberBtn = document.querySelector(".add-member-button");
const modalInputName = document.querySelector(".modal-input-name");
const modalInputEngName = document.querySelector(".modal-input-engname");
const modalInputGithub = document.querySelector(".modal-input-github");
const modalInputGender = document.querySelector(".modal-input-gender");
const modalInputRole = document.querySelector(".modal-input-role");
const modalInputWeek1 = document.querySelector(".modal-input-week1");
const modalInputWeek2 = document.querySelector(".modal-input-week2");

// 입력값으로 새 객체를 만들기
// 로컬 스토리지에 있는 배열 가져와서 복사 후 그 배열에 push
// 그리고 그 배열을 다시 로컬 스토리지에 올리기
addMemberBtn.addEventListener("click", () => {
  const prevMemberData = [...membersData];

  const newMember = {
    id: prevMemberData.length + 1,
    name: modalInputName.value,
    englishName: modalInputEngName.value,
    github: modalInputGithub.value,
    gender: modalInputGender.value,
    role: modalInputRole.value,
    firstWeekGroup: Number(modalInputWeek1.value),
    secondWeekGroup: Number(modalInputWeek2.value),
  };

  prevMemberData.push(newMember);
  localStorage.setItem("membersData", JSON.stringify(prevMemberData));

  addMemberModal.style.display = "none";
  renderMemberList(prevMemberData);
});
