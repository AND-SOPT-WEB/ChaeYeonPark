const filterInputName = document.querySelector(".filter-input-name");
const filterInputEngName = document.querySelector(".filter-input-engname");
const filterInputGithub = document.querySelector(".filter-input-github");
const filterInputGender = document.querySelector(".filter-input-gender");
const filterInputRole = document.querySelector(".filter-input-role");
const filterInputWeek1 = document.querySelector(".filter-input-week1");
const filterInputWeek2 = document.querySelector(".filter-input-week2");

export const filterMemberList = (membersData) => {
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

  return filteredMemberList;
};
