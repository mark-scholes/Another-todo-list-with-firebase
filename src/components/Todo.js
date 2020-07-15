import React, { useState } from "react";
import { List, ListItemText, ListItem, Modal, Button } from "@material-ui/core";
import "../Todo.css";
import db from "../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const editTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Edit</h1>
          <input
            placeholder={props.todo.todo}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button color="primary" onClick={editTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todoList">
        <ListItem>
          <ListItemText
            key={Math.floor(Math.random() * 3000)}
            primary={props.todo.todo}
            secondary="Incomplete"
          />
        </ListItem>
        <EditIcon onClick={(e) => setOpen(true)} />
        <DeleteIcon
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        />
      </List>
    </>
  );
};

export default Todo;
