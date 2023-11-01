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

function switchEditState(button, displayValue, btnText, valueType, nameType, descriptionType) {
   const todoItem = button.parentElement;
   todoItem.children[2].style.display = displayValue;
   todoItem.children[3].textContent = btnText;
   const editName = todoItem.children[0];
   const editDescription = todoItem.children[1];
   let holdValues = [editName[valueType], editDescription[valueType]];
   editName.remove();
   editDescription.remove();
   const newName = document.createElement(nameType);
   const newDescription = document.createElement(descriptionType);
   if(valueType == "value") valueType = "textContent";
   else valueType = "value";
   newName[valueType] = holdValues[0];
   newDescription[valueType] = holdValues[1];
   todoItem.insertAdjacentElement("afterBegin", newDescription);
   todoItem.insertAdjacentElement("afterBegin", newName);
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
         switchEditState(editBtn, "none", "Save", "textContent", "input", "input");
      } else if(e.target.textContent == "Save") {
         const saveBtn = e.target;
         switchEditState(saveBtn, "inline-block", "Edit", "value", "h2", "p");
      }
   }
});