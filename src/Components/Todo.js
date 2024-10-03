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

import { TodosContext } from "../Contexts/TodosContext";
import { useContext } from "react";
// import { ModalDeleteContext } from "../Contexts/ModalDeleteContext";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);

  // console.log("ppppp", openDeleteModal);

  function handleCheckClick() {
    // alert(`${id}`);
    const updatedTodos = JSON.parse(localStorage.getItem("todos")).map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo
  }

  // Edit button functions
  function handleEditClick() {
    setOpenEditModal(true);
  }
  function handleCloseEditModal() {
    setOpenEditModal(false);
  }
  // Edit button functions

  // Delete button functions
  function handleDeleteClick() {
    setOpenDeleteModal(true); // Open modal when delete is clicked
  }
  function handleCloseDeleteModal() {
    setOpenDeleteModal(false); // Close modal
  }

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
                // style={{ background: "red" }}
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

      {/* Modal for delete confirmation */}
      <ModalDelete
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        todo={todo}
      />
      <ModalEdit
        open={openEditModal}
        onClose={handleCloseEditModal}
        todo={todo}
      />
    </>
  );
}
