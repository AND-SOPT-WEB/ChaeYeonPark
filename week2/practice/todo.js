const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");
let todoListContent = [];

// 리스트 추가 함수
const addButtonClick = () => {
  // 리스트 요소 추가
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = document.querySelector("input").value;
  li.appendChild(span);

  // 삭제 버튼 추가
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  li.appendChild(deleteButton);

  todoList.appendChild(li);

  // 인풋 초기화
  document.querySelector("input").value = "";

  // 리스트 삭제하는 함수
  const deleteButtonClick = () => {
    todoList.removeChild(li);
  };

  // 리스트 삭제 버튼
  deleteButton.addEventListener("click", deleteButtonClick);

  todoListContent.push(span.textContent);
  console.log(todoListContent);
};

// 리스트 추가 버튼
todoButton.addEventListener("click", addButtonClick);
