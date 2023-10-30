const addBtn = document.getElementById("add-todo");
let countTodo = 0;

function submitButtonClicked() {
   const todoName = document.querySelector("#todo-input-name");
   const todoDescription = document.getElementById("todo-input-description");
   const todoList = document.querySelector("#todo-list ul");

   todoList.innerHTML += `
      <li id=${"todo-item-" + countTodo}>
         <h2>${todoName.value}</h2>
         <p>${todoDescription.value}</p>
         <button id=${"delete-item-" + countTodo}>X</button>
      </li>
   `

   todoName.value = "";
   todoDescription.value = "";
   countTodo ++;
}

addBtn.addEventListener("click", submitButtonClicked);