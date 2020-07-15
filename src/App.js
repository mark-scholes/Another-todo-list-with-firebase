import React, { useState, useEffect } from "react";
import db from "./firebase";
import Todo from "./components/Todo";
import "./App.css";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>

        <Button
          varient="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
          disable={!input}
        >
          Add todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
