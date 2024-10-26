import { members } from "./memberData.js";

// 페이지가 로드되면 로컬스토리지에 memberData를 set
// memberData를 get 후 map돌려서 table 채우기
window.localStorage.setItem("membersData", JSON.stringify(members));

const membersData = JSON.parse(localStorage.getItem("membersData"));

const memberList = document.querySelector(".table-body");

// const renderTableHeader = () => {
//   const tableHeader = `
//     <tr>
//         <th><input type="checkbox" class="table-header-checkbox"/></th>
//         <th>이름</th>
//         <th>영문이름</th>
//         <th>GitHub</th>
//         <th>성별</th>
//         <th>역할</th>
//         <th>1주차 금잔디</th>
//         <th>2주차 금잔디</th>
//     </tr>`;

//   memberList.innerHTML = tableHeader;
// };

const renderMemberList = (data) => {
  //   renderTableHeader();
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

// filterSearchBtn.addEventListener("click", () => {
//   const filteredMemberList = membersData.reduce((prev, member) => {
//     const filteredName = filterInputName.value
//       ? member.name.includes(filterInputName.value)
//       : true;

//     const filteredEngName = filterInputEngName.value
//       ? member.englishName
//           .toLowerCase()
//           .includes(filterInputEngName.value.toLowerCase())
//       : true;

//     const filteredGithub = filterInputGithub.value
//       ? member.github.includes(filterInputGithub.value)
//       : true;

//     const filteredGender = filterInputGender.value
//       ? member.gender === filterInputGender.value
//       : true;

//     const filteredRole = filterInputRole.value
//       ? member.role === filterInputRole.value
//       : true;

//     const filteredWeek1 = filterInputWeek1.value
//       ? member.firstWeekGroup === Number(filterInputWeek1.value)
//       : true;

//     const filteredWeek2 = filterInputWeek2.value
//       ? member.secondWeekGroup === Number(filterInputWeek2.value)
//       : true;

//     if (
//       filteredName &&
//       filteredEngName &&
//       filteredGithub &&
//       filteredGender &&
//       filteredRole &&
//       filteredWeek1 &&
//       filteredWeek2
//     ) {
//       prev.push(member);
//     }

//     return prev;
//   }, []);

//   console.log(filteredMemberList);

//   tableBody.textContent = "";

//   renderMemberList(filteredMemberList);
// });

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

    return (
      name.includes(filterInputName.value) &&
      englishName
        .toLowerCase()
        .includes(filterInputEngName.value.toLowerCase()) &&
      github.toLowerCase().includes(filterInputGithub.value.toLowerCase()) &&
      gender.includes(filterInputGender.value) &&
      role.includes(filterInputRole.value) 
    //   &&
    //   firstWeekGroup === Number(filterInputWeek1.value) &&
    //   secondWeekGroup === Number(filterInputWeek2.value)
    );
  });

  console.log(filteredMemberList);
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
