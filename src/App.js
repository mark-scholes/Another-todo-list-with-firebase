import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "boxvr workout"]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todos.map((todo) => {
          return <li key={Math.floor(Math.random() * 3000)}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
