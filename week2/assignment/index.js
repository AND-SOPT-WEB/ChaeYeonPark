import { members } from "./memberData.js";

// 페이지가 로드되면 로컬스토리지에 memberData를 set하기
window.localStorage.setItem("membersData", JSON.stringify(members));

// memberData를 get한 후
const membersData = JSON.parse(localStorage.getItem("membersData"));
console.log(membersData);

// map돌려서 table 채우기
const memberList = document.querySelector(".table-content");
// const memberListTr = memberList.appendChild('tr')

const memberListData = membersData.map((member) => {
  return `
    <tr>
              <td><input type="checkbox" /></td>
              <td>${member.name}</td>
              <td>${member.englishName}</td>
              <td>${member.github}</td>
              <td>${member.gender}</td>
              <td>${member.role}</td>
              <td>${member.firstWeekGroup}</td>
              <td>${member.secondWeekGroup}</td>
    </tr>
    `;
});

memberList.innerHTML += memberListData.join('')

// tableClass.innerHTML += cartProductCard.join('');
