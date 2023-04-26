import React, { useState } from "react";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setTasks([...tasks, { title: inputValue.trim(), completed: false }]);
    setInputValue("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const incompleteTask = tasks.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="todo-box">
        <div className="input-container">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={inputChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              addTask();
            }
          }}
        />
        </div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <span
                className={task.completed ? "completed" : ""}
                onClick={() => toggleComplete(index)}
              >
                {task.title}
              </span>
              <span className="delete-icon" onClick={() => deleteTask(index)}>
                X
              </span>
            </div>
          ))}
        </div>
        <div className="task-left">{incompleteTask} items left</div>
      </div>
    </div>
  );
}

export default App;
