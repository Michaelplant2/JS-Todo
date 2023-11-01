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
         <button class="edit-btn" id=${"edit-item-" + countTodo}>Edit</button>
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
         const xBtn = e.target;
         xBtn.parentElement.remove();
      } else if(e.target.textContent == "Edit") {
         const editBtn = e.target;
         const todoItem = editBtn.parentElement;
         const editName = todoItem.children[0];
         const editDescription = todoItem.children[1];
         let holdValues = [editName.textContent, editDescription.textContent];
         editName.remove();
         editDescription.remove();
         const newName = document.createElement("input");
         const newDescription = document.createElement("input");
         newName.value = holdValues[0];
         newDescription.value = holdValues[1];
         todoItem.insertAdjacentElement("afterBegin", newDescription);
         todoItem.insertAdjacentElement("afterBegin", newName);
      }
   }
});