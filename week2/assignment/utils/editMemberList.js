// 멤버 삭제
export const deleteMember = () => {
  const deleteMemberIds = [];
  const prevMemberList = JSON.parse(localStorage.getItem("membersData"));
  const filterCheckboxAll = document.querySelectorAll(".filter-checkbox");

  // checed된 요소들의 id 담기
  filterCheckboxAll.forEach((checkbox) => {
    if (checkbox.checked) {
      deleteMemberIds.push(Number(checkbox.parentNode.parentNode.id));
    }
  });

  // 같은 id 값을 가지지 않은 친구들만 filter
  const updateMemberList = prevMemberList.filter(
    (member) => !deleteMemberIds.includes(member.id)
  );

  return updateMemberList;
};

// 멤버 추가
const modalInputName = document.querySelector(".modal-input-name");
const modalInputEngName = document.querySelector(".modal-input-engname");
const modalInputGithub = document.querySelector(".modal-input-github");
const modalInputGender = document.querySelector(".modal-input-gender");
const modalInputRole = document.querySelector(".modal-input-role");
const modalInputWeek1 = document.querySelector(".modal-input-week1");
const modalInputWeek2 = document.querySelector(".modal-input-week2");

export const validateInput = () => {
  return modalInputName.value &&
    modalInputEngName.value &&
    modalInputGithub.value &&
    modalInputGender.value &&
    modalInputRole.value &&
    modalInputWeek1.value &&
    modalInputWeek2.value
    ? true
    : false;
};

export const addMember = () => {
  const prevMemberList = JSON.parse(localStorage.getItem("membersData"));

  const newMember = {
    id: prevMemberList.length + 1,
    name: modalInputName.value,
    englishName: modalInputEngName.value,
    github: modalInputGithub.value,
    gender: modalInputGender.value,
    role: modalInputRole.value,
    firstWeekGroup: Number(modalInputWeek1.value),
    secondWeekGroup: Number(modalInputWeek2.value),
  };

  const newMemberList = [...prevMemberList];
  newMemberList.push(newMember);

  return newMemberList;
};
