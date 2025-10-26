var list = document.getElementById("list");

//TODO LIST
function addTodo() {
  var todo = document.getElementById("todo");
  list.innerHTML += `<li>
    <input type='text' value='${todo.value}' disabled/>
    <button onclick = 'deleteTodo(event)'> Delete </button>
    <button onclick = 'editTodo(event)'> Edit </button>
    </li>`;

  todo.value = "";
}

//ENTER

function todoEnter(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

//DELETE
function deleteTodo(event) {
  event.target.parentNode.remove();
}

//EDIT
function editTodo(event) {
  var input = event.target.parentNode.childNodes[1];
  input.setAttribute("class", "focus-input");
  input.disabled = false;
  input.focus();
  event.target.innerHTML = "Update";
  event.target.setAttribute("onclick", "updateTodo(event)");
}

//UPDATE
function updateTodo(event) {
  var input = event.target.parentNode.childNodes[1];
  input.setAttribute("class", " ");
  input.disabled = true;
  event.target.innerHTML = "Edit";
}
//DELETE ALL

function deleteAll(event) {
  list.innerHTML = "";
}
