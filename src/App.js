import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "boxvr workout"]);
  return (
    <div className="App">
      <input />
      <button>Add todo</button>

      <ul>
        {todos.map((todo) => {
          return <li key={Math.floor(Math.random() * 3000)}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
