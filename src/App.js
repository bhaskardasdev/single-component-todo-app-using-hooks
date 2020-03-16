import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "dancing" },
    { id: 2, task: "teaching" },
    { id: 3, task: "learning" }
  ]);
  const [task, setTask] = useState("");
  const [editedTodo, setEditedTodo] = useState(null);

  const handleChange = e => {
    setTask(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (editedTodo) {
      let newTodos = [...todos];
      newTodos[editedTodo].task = task;
      setTodos(newTodos);
      setEditedTodo(null);
    } else {
      setTodos([...todos, { id: todos.length + 1, task }]);
    }
    setTask("");
  };
  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const handleEdit = index => {
    let newTodos = [...todos];
    const todo = newTodos[index];
    setTask(todo.task);
    setEditedTodo(index);
  };

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <p>{todo.task}</p>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={handleChange}
          value={task}
        />
        <button>{editedTodo ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default App;
