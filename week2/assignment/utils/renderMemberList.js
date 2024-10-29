import { setupCheckbox } from "./setupCheckbox.js";

export const renderMemberList = (data) => {
  const memberList = document.querySelector(".table-body");
  memberList.textContent = "";
  const memberListData = data.map((member) => {
    return `            
          <tr class="tr" id="${member.id}">
                    <td><input type="checkbox" class="filter-checkbox" /></td>
                    <td>${member.name}</td>
                    <td>${member.englishName}</td>
                    <td>
                      <a 
                        href="https://github.com/${member.github}"
                        target="_blank">
                        ${member.github} 
                      </a>
                    </td>
                    <td>${member.gender === "male" ? "남자" : "여자"}</td>
                    <td>${member.role}</td>
                    <td>${member.firstWeekGroup}</td>
                    <td>${member.secondWeekGroup}</td>
          </tr>
          `;
  });

  memberList.innerHTML += memberListData.join("");
  setupCheckbox();
};
