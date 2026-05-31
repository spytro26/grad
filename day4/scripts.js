// ============================
// JS = BEHAVIOUR (what things DO)
// ============================

/*
╔═══════════════════════════════════════════════════════════╗
║                   WHAT IS THE DOM?                        ║
║                                                           ║
║  DOM = Document Object Model                              ║
║  When the browser loads HTML, it creates a tree of        ║
║  objects from every tag. JavaScript can then:             ║
║                                                           ║
║   FIND    elements  →  getElementById, querySelectorAll   ║
║   READ    content   →  .value, .textContent               ║
║   CHANGE  content   →  .textContent = "...", .innerHTML   ║
║   CREATE  elements  →  createElement, appendChild         ║
║   STYLE   elements  →  classList.add / classList.remove   ║
║   LISTEN  for events → addEventListener                   ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
*/


// ----------------------------------
// STEP 1: App data
// Each task is an object: { id, text, done }
// ----------------------------------
let tasks         = [];
let currentFilter = 'all';
let nextId        = 1;


// ----------------------------------
// STEP 2: addTask() — called when "Add" is clicked
// ----------------------------------
function addTask() {

  // ┌─ DOM METHOD 1: getElementById("id") ───────────────────┐
  // │ Finds the ONE element whose id="taskInput"             │
  // │ Returns that element so we can read its typed value    │
  // └────────────────────────────────────────────────────────┘
  let inputBox = document.getElementById('taskInput');

  // ┌─ DOM METHOD 2: element.value ──────────────────────────┐
  // │ .value reads the text the user typed in the input box  │
  // └────────────────────────────────────────────────────────┘
  let text = inputBox.value.trim(); // .trim() removes extra spaces

  if (text === '') {
    alert('Please type a task first!');
    return;
  }

  // Save the new task to our array
  let newTask = { id: nextId, text: text, done: false };
  tasks.push(newTask);
  nextId++;

  // ┌─ DOM METHOD 3: element.value = "" ─────────────────────┐
  // │ Setting .value to "" clears the input box              │
  // └────────────────────────────────────────────────────────┘
  inputBox.value = '';

  renderTasks();
}


// ----------------------------------
// STEP 3: renderTasks() — draws all tasks on screen
// ----------------------------------
function renderTasks() {

  // ┌─ DOM METHOD 4: getElementById() ───────────────────────┐
  // │ Finds the <ul id="taskList"> on the page               │
  // └────────────────────────────────────────────────────────┘
  let list = document.getElementById('taskList');

  // ┌─ DOM METHOD 5: element.innerHTML = "" ─────────────────┐
  // │ Wipes all children inside <ul> so we can re-draw fresh │
  // └────────────────────────────────────────────────────────┘
  list.innerHTML = '';

  // Filter tasks based on the selected tab
  let filtered = tasks.filter(function(task) {
    if (currentFilter === 'active') return task.done === false;
    if (currentFilter === 'done')   return task.done === true;
    return true; // 'all' — show everything
  });

  // If no tasks to show, display a friendly message
  if (filtered.length === 0) {
    // ┌─ DOM METHOD 6: element.innerHTML = "..." ────────────┐
    // │ Puts HTML content directly inside the <ul>           │
    // └───────────────────────────────────────────────────────┘
    list.innerHTML = '<p class="empty-msg">No tasks here! 🎉</p>';
  }

  // Loop through each task and build a <li> for it
  filtered.forEach(function(task) {

    // ┌─ DOM METHOD 7: document.createElement("tag") ────────┐
    // │ Creates a brand-new <li> element in memory           │
    // │ (Not visible on the page yet)                        │
    // └───────────────────────────────────────────────────────┘
    let li = document.createElement('li');

    // ┌─ DOM METHOD 8: element.className = "..." ────────────┐
    // │ Sets the CSS class on the element                    │
    // │ We add "done" class if the task is finished          │
    // └───────────────────────────────────────────────────────┘
    li.className = 'task-item' + (task.done ? ' done' : '');

    // ┌─ DOM METHOD 9: element.innerHTML = "..." ────────────┐
    // │ Builds the inside of the <li>:                       │
    // │ check button + task text + delete button             │
    // └───────────────────────────────────────────────────────┘
    li.innerHTML =
      '<button class="check-btn" onclick="toggleDone(' + task.id + ')">' +
        (task.done ? '✓' : '') +
      '</button>' +
      '<span class="task-text">' + escapeHTML(task.text) + '</span>' +
      '<button class="delete-btn" onclick="deleteTask(' + task.id + ')">✕</button>';

    // ┌─ DOM METHOD 10: parent.appendChild(child) ───────────┐
    // │ Inserts the <li> into the <ul> on the actual page    │
    // │ Now the user can see the task!                       │
    // └───────────────────────────────────────────────────────┘
    list.appendChild(li);
  });

  updateSummary();
}


// ----------------------------------
// STEP 4: toggleDone() — marks a task as done or undone
// ----------------------------------
function toggleDone(id) {
  tasks.forEach(function(task) {
    if (task.id === id) {
      task.done = !task.done; // true becomes false, false becomes true
    }
  });
  renderTasks();
}


// ----------------------------------
// STEP 5: deleteTask() — removes a task
// ----------------------------------
function deleteTask(id) {
  // Keep every task EXCEPT the one with this id
  tasks = tasks.filter(function(task) {
    return task.id !== id;
  });
  renderTasks();
}


// ----------------------------------
// STEP 6: setFilter() — switches between All / Active / Done
// ----------------------------------
function setFilter(filter, btn) {
  currentFilter = filter;

  // ┌─ DOM METHOD 11: querySelectorAll(".class") ───────────┐
  // │ Finds ALL elements with class="filter-btn"           │
  // │ Returns a list so we can loop through all of them    │
  // └──────────────────────────────────────────────────────┘
  document.querySelectorAll('.filter-btn').forEach(function(b) {

    // ┌─ DOM METHOD 12: classList.remove("name") ────────────┐
    // │ Removes the "active" CSS class from every button     │
    // └───────────────────────────────────────────────────────┘
    b.classList.remove('active');
  });

  // ┌─ DOM METHOD 13: classList.add("name") ───────────────┐
  // │ Adds "active" CSS class ONLY to the clicked button   │
  // │ This makes it turn blue                              │
  // └──────────────────────────────────────────────────────┘
  btn.classList.add('active');

  renderTasks();
}


// ----------------------------------
// STEP 7: clearCompleted() — removes all done tasks
// ----------------------------------
function clearCompleted() {
  tasks = tasks.filter(function(task) {
    return task.done === false; // Keep only undone tasks
  });
  renderTasks();
}


// ----------------------------------
// STEP 8: updateSummary() — shows "X tasks remaining"
// ----------------------------------
function updateSummary() {
  let remaining = tasks.filter(function(task) {
    return task.done === false;
  }).length;

  // ┌─ DOM METHOD 14: getElementById() ────────────────────┐
  // │ Finds the <div id="summary"> element                 │
  // └──────────────────────────────────────────────────────┘
  // ┌─ DOM METHOD 15: element.textContent = "..." ─────────┐
  // │ Changes the visible text on screen                   │
  // │ Safer than innerHTML — does NOT allow HTML tags      │
  // └──────────────────────────────────────────────────────┘
  document.getElementById('summary').textContent = remaining + ' task(s) remaining';
}


// ----------------------------------
// HELPER: escapeHTML() — safety function
// Stops special characters like < > & from breaking the page
// ----------------------------------
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}


// ┌─ DOM METHOD 16: addEventListener("event", fn) ────────┐
// │ Watches the input box for a "keydown" event           │
// │ When the Enter key is pressed, addTask() runs         │
// └──────────────────────────────────────────────────────┘
document.getElementById('taskInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});


// Draw the list once when the page first loads
renderTasks();