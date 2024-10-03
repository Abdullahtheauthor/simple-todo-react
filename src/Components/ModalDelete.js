import * as React from "react";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { DialogActions, DialogContent } from "@mui/material";

import { useContext } from "react";
// import { ModalDeleteContext } from "../Contexts/ModalDeleteContext";
import { TodosContext } from "../Contexts/TodosContext";

// const emails = ["username@gmail.com"];

export default function ModalDelete({ open, onClose, todo }) {
  const { todos, setTodos } = useContext(TodosContext);

  // console.log("inside delete module", open);

  function handleDeleteConfirm() {
    console.log(`Deleting todo with id: ${todo.id}`);

    const updatedTodos = todos.filter((t) => {
      return t.id !== todo.id;
    });

    console.log("t.iddddd", updatedTodos);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo
    onClose(); // Close modal after deletion
  }
  return (
    <Dialog
      onClose={onClose}
      open={open}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DialogTitle>Are you sure you want to delete this task? </DialogTitle>
      <DialogContent> This task will be deleted forever</DialogContent>
      <Stack
        direction="row"
        spacing={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={handleDeleteConfirm}
          >
            YES
          </Button>
          <Button variant="outlined" color="error" onClick={onClose}>
            NO
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}
