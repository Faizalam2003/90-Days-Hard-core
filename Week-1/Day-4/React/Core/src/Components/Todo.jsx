import React, { useState, useEffect } from "react";

const Todo = () => {
  const [value, setValue] = useState(""); // For input value
  const [todos, setTodos] = useState([]); // For todos list

  // Retrieve todos from local storage on initial load
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos && storedTodos !== "[]") {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (value.trim() !== "") {
      setTodos([...todos, value]); // Add new task to the list
      setValue(""); // Clear the input field
    }
  };

  const deleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); // Remove the task at the specified index
    setTodos(updatedTodos); // Update the state
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-black ml-2 mt-3"
      />
      <button onClick={addTask} className="border border-black ml-2">
        Add Task
      </button>
      <div className="mt-5 ml-2">
        <h1>Todo List</h1>
        <p>Number of tasks: {todos.length}</p>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() => deleteTask(index)}
                className="border border-black ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
