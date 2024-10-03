import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext } from "react";

import { TodosContext } from "../Contexts/TodosContext";

export default function ModalEdit({ open, onClose, todo }) {
  // State Components
  const { todos, setTodos } = useContext(TodosContext);
  const [updatedTodo, setUpdatedTodo] = React.useState({
    title: todo.title,
    details: todo.details,
  });

  const handleUpdateConfirm = () => {
    // alert("Hello");
    const updatedTodovar = todos.map((t) => {
      if (t.id === todo.id) {
        t.title = updatedTodo.title;
        t.details = updatedTodo.details;
        return t;
      } else return t;
    });
    setTodos(updatedTodovar);
    localStorage.setItem("todos", JSON.stringify(updatedTodovar)); // Clear the input field after adding a todo

    setUpdatedTodo({ title: "", details: "" });
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Edit a task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          label="Title"
          fullWidth
          variant="outlined"
          value={updatedTodo.title}
          onChange={(e) => {
            setUpdatedTodo({ ...updatedTodo, title: e.target.value });
          }}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          label="Description"
          fullWidth
          variant="standard"
          value={updatedTodo.details}
          onChange={(e) => {
            setUpdatedTodo({ ...updatedTodo, details: e.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleUpdateConfirm}>
          Confirm
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
