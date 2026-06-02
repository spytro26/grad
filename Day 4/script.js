let input = document.getElementById("todo-input");
let button = document.getElementById("add-btn");
let list = document.getElementById("todo-list");

button.addEventListener("click", function() {
  let text = input.value;

  let item = document.createElement("li");
  item.textContent = text;

  list.appendChild(item);

  input.value = "";
});