const addBtn = document.getElementById("add-todo");
const todoName = document.querySelector("#todo-input-name");
const todoDescription = document.getElementById("todo-input-description");
const todoList = document.querySelector("#todo-list ul");
let countTodo = 0;

function submitButtonClicked() {

   todoList.innerHTML += `
      <li id=${"todo-item-" + countTodo}>
         <h2>${todoName.value}</h2>
         <p>${todoDescription.value}</p>
         <button class="done-btn" id=${"done-item-" + countTodo}>Done</button>
         <button class="x-btn" id=${"delete-item-" + countTodo}>X</button>
      </li>
   `
   todoName.value = "";
   todoDescription.value = "";
   countTodo ++;
}

function strikeThroughTodo(button, textDecoration, newText) {
   const todoItem = button.parentElement;
   todoItem.children[0].style.textDecoration = textDecoration;
   todoItem.children[1].style.textDecoration = textDecoration;
   button.textContent = newText;
}

addBtn.addEventListener("click", submitButtonClicked);

todoList.addEventListener("click", (e)=>{
   if(e.target.tagName == "BUTTON") {
      if(e.target.textContent == "Done") {
         strikeThroughTodo(e.target, "line-through", "Active")
      } else if(e.target.textContent == "Active") {
         strikeThroughTodo(e.target, "", "Done")
      } else if(e.target.textContent == "X") {
         const li = e.target.parentElement;
         li.style.display = "none";
      }
   }
});