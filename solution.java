import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Then Learn React js", completed: false },
    { id: 3, text: "Learn React Development", completed: true },
    { id: 4, text: "Build React Frontend Projects", completed: false },
    { id: 5, text: "Build Full Stack Projects", completed: false },
  ]);

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
            alt=""
          />
          To-Do List
        </h2>

        <div className="row">
          <input
            type="text"
            placeholder="Add your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addTask}>ADD</button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "checked" : ""}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}

              <span
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
              >
                🗑
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
