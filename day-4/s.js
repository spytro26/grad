const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");

  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const text = document.createElement("span");
  text.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(text);

  task.appendChild(taskLeft);
  task.appendChild(deleteBtn);


  taskList.appendChild(task);

  taskInput.value = "";

  checkbox.addEventListener("change", function () {
    text.classList.toggle("completed");
  });


  deleteBtn.addEventListener("click", function () {
    task.remove();
    });
});