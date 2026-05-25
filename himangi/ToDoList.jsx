mport React, { useRef, useState } from 'react'
import todo_icon from './assets/todo_icon.png'

import TodoItems from './components/TodoItems'

const App = () => {

  const inputRef = useRef();

  const [todoList, setTodoList] = useState([]);

  const add = () => {

    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTodoList((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  const toggle = (id) => {

    setTodoList((prev) =>
      prev.map((todo) => {

        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    );
  };

  return (

    <div className='bg-stone-900 grid py-4 min-h-screen'>

      <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/* title */}

        <div className='flex items-center mt-7 gap-2'>

          <img className='w-8' src={todo_icon} alt="" />

          <h1 className='text-3xl font-semibold'>
            To-Do List
          </h1>

        </div>

        {/* input box */}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>

          <input
            ref={inputRef}
            className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
            type="text"
            placeholder='Add your task'
          />
          <button

            onClick={add}

            className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'

          >

            Add +

          </button>


        </div>


        {/* todo list */}

        <div>


          {
            todoList.map((item) => (
              <TodoItems

                key={item.id}
                text={item.text}
                completed={item.completed}
                id={item.id}

                deleteTodo={deleteTodo}
                toggle={toggle}

              />
            ))

          }

        </div>

      </div>


    </div>

  )
}

export default App





TodoItems.jsx
import React from 'react'

import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

function TodoItems({
  text,
  completed,
  id,
  deleteTodo,
  toggle
}) {

  return (

    <div className='flex items-center my-3 gap-2'>

      <div
        onClick={() => toggle(id)}
        className='flex flex-1 items-center cursor-pointer'
      >

        <img
          src={completed ? tick : not_tick}
          alt=''
          className='w-7'
        />

        <p className={`ml-4 text-[17px] ${completed ? "line-through text-slate-400" : "text-slate-700"}`}>
          {text}
        </p>

      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt=''
        className='w-3.5 cursor-pointer'
      />

    </div>
  );
}

export default TodoItems
