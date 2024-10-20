import * as React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// import icons

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import { useTodo } from "../Contexts/TodosContext";
import { useToast } from "../Contexts/ToastContext";

export default function Todo({ todo, deleteClick, editClick }) {
  // const { todos, setTodos } = useTodo();
  const { todos, dispatch } = useTodo();

  const { showHideToast } = useToast();

  // const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  // console.log("ppppp", openDeleteModal);

  function handleCheckClick() {
    console.log(`loggggg`, todo);

    dispatch({
      type: "checked",
      payload: todo,
    });
    if (todo.isCompleted) {
      showHideToast("The task is now completed");
    } else {
      showHideToast("The task is not completed");
    }
  }

  // Edit button functions
  function handleEditClick() {
    editClick(todo);
  }

  // Edit button functions

  // Delete button functions
  function handleDeleteClick() {
    deleteClick(todo);
    // Open modal when delete is clicked
  }
  // function handleCloseDeleteModal() {
  //   setOpenDeleteModal(false); // Close modal
  // }

  return (
    <>
      <Card
        className="todoCard"
        sx={{ minWidth: 400 }}
        style={{ margin: "20px", background: "#6482e2" }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography
                sx={{ textAlign: "left" }}
                variant="h3"
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <br></br>
              <Typography sx={{ textAlign: "left" }} variant="h6">
                {todo.details}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{}}
                variant="h4"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                {/* Action Buttons */}
                <ToggleButtonGroup>
                  {/* Edit Button */}
                  <Button
                    variant="text"
                    style={{ background: "white" }}
                    className="iconButton"
                    sx={{ minHeight: 70, minWidth: 70 }}
                    onClick={handleEditClick}
                  >
                    <EditIcon style={{ color: "#00c853" }} />
                  </Button>

                  {/* // Edit Button */}

                  {/* Check icon button */}
                  <Button
                    style={{ background: todo.isCompleted ? "green" : "white" }}
                    className="iconButton"
                    onClick={() => {
                      handleCheckClick();
                    }}
                  >
                    <CheckIcon />
                  </Button>

                  {/* Check icon button */}

                  <Button
                    style={{
                      background: "white",
                    }}
                    className="iconButton"
                    onClick={handleDeleteClick}
                  >
                    {" "}
                    <DeleteIcon style={{ color: "red" }} />
                    {/* <ModalDeleteContext.Provider
                      value={{ modaleDelete, setModalDelete }}
                    >
                      <ModalDelete></ModalDelete>
                    </ModalDeleteContext.Provider>
                    ; */}
                  </Button>
                </ToggleButtonGroup>

                {/* Action buttons */}
              </Typography>
            </Grid>
          </Grid>

          {/* // Filter buttons */}
        </CardContent>
      </Card>
    </>
  );
}
