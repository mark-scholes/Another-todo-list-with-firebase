import React from "react";
import { List, ListItemText, ListItem } from "@material-ui/core";
import "../Todo.css";

const Todo = ({ todo }) => {
  return (
    <List className="todoList">
      <ListItem>
        <ListItemText
          key={Math.floor(Math.random() * 3000)}
          primary={todo}
          secondary="Incomplete"
        />
      </ListItem>
    </List>
  );
};

export default Todo;
