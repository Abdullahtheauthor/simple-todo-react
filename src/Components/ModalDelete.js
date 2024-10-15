import * as React from "react";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { DialogActions, DialogContent } from "@mui/material";

import { useContext } from "react";
// import { ModalDeleteContext } from "../Contexts/ModalDeleteContext";
// import { useTodo } from "../Contexts/TodosContext";
import { useToast } from "../Contexts/ToastContext";
import { useTodo } from "../Contexts/TodosContext";

export default function ModalDelete({ open, onClose, todo }) {
  const { todos, dispatch } = useTodo();

  const { showHideToast } = useToast();

  // console.log("inside delete module==========", open);

  function handleDeleteConfirm() {
    console.log("from Modal delete confirm ", todo);
    dispatch({
      type: "deleteTodo",
      payload: todo,
    });
    showHideToast("The task is deleted successfully");
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
