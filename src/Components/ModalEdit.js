import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext, useEffect, useState } from "react";
import { useTodo } from "../Contexts/TodosContext";

import { useToast } from "../Contexts/ToastContext";

export default function ModalEdit({ open, onClose, todo }) {
  // const { todos, setTodos } = useContext(TodosContext);
  const { todos, dispatch } = useTodo();

  const { showHideToast } = useToast();

  // Initialize state for the updatedTodo
  const [updatedTodo, setUpdatedTodo] = useState({
    title: "",
    details: "",
  });

  useEffect(() => {
    console.log("Received todo:", todo);
  }, [todo]);

  // Update state when `todo` changes
  useEffect(() => {
    if (todo) {
      setUpdatedTodo({
        title: todo.title || "",
        details: todo.details || "",
      });
    }
  }, [todo]); // This will trigger whenever the `todo` prop changes

  const handleUpdateConfirmClick = () => {
    console.log("todo inside modale edit ------", todo);
    console.log("09099", todo.title);
    dispatch({
      type: "editTodo",
      payload: updatedTodo,
    });

    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  // If todo is null, avoid rendering the form
  if (!todo) {
    return null; // This ensures the modal content is not rendered until todo is available
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit a task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          label="Title"
          fullWidth
          variant="outlined" // Use the same variant for both fields
          value={updatedTodo.title} // Correctly bind to updatedTodo state
          onChange={(e) => setUpdatedTodo({ ...todo, title: e.target.value })}
        />
        <TextField
          required
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          variant="outlined" // Consistent variant
          value={updatedTodo.details} // Correctly bind to updatedTodo state
          onChange={(e) => setUpdatedTodo({ ...todo, details: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdateConfirmClick}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
