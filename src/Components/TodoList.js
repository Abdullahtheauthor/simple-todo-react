import * as React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

// import { useState } from "react";
import { useTodo } from "../Contexts/TodosContext";
import { useToast } from "../Contexts/ToastContext";

import { useEffect, useState, useMemo } from "react";

// External libraries
import { uid } from "uid";

import Todo from "./Todo";

export default function TodoList() {
  const { todos, setTodos } = useTodo();
  const { showHideToast } = useToast();
  const [TitleInput, setAddTitleInput] = useState("");
  const [filterDisplay, setfilterDisplay] = useState("All");
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [todoToDelete, setTodoToDelete] = React.useState(null);
  const [todoToEdit, setTodoToEdit] = React.useState(null);

  function changeDisplayType(e) {
    setfilterDisplay(e.target.value);
  }

  function handleAddButton() {
    const newtodo = {
      id: uid(7),
      title: TitleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newtodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo
    setAddTitleInput("");
    showHideToast("Successfuly added a new task");
  }

  // For the first render
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  // What to render
  let renderedtodos = todos;
  const completedTods = useMemo(() => {
    todos.filter((t) => {
      return t.isCompleted;
    });
  });
  const incompletedTodos = useMemo(() => {
    todos.filter((t) => {
      return !t.isCompleted;
    });
  });

  if (filterDisplay === "Done") {
    renderedtodos = completedTods;
  } else if (filterDisplay === "Not Done") {
    renderedtodos = incompletedTodos;
  } else {
    renderedtodos = todos;
  }
  // console.log(renderedtodos);
  console.log("filterDisplay", filterDisplay);

  // // Delete button functions

  // handlers
  function handleDeleteClick(todo) {
    setTodoToDelete(todo);

    console.log("from todo list", todo);
    setOpenDeleteModal(true); // Open modal when delete is clicked
  }
  function handleCloseDeleteModal() {
    setOpenDeleteModal(false); // Close modal
  }

  function handleEditClick(todo) {
    setOpenEditModal(true);
    console.log("from todo eddiiiiit list", todo);
    setTodoToEdit(todo);
  }

  function handleCloseEditModal() {
    setOpenEditModal(false);
  }
  function handleCloseEditModal() {
    setOpenEditModal(false);
  }

  const todosJsx = renderedtodos.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        deleteClick={handleDeleteClick}
        editClick={handleEditClick}
      />
    );
  });

  return (
    <Container maxWidth="md">
      <Card
        sx={{ minWidth: 275 }}
        style={{ maxHeight: "80vh", overflow: "auto" }}
      >
        <CardContent>
          <Typography sx={{}} variant="h2">
            My Tasks
          </Typography>
          <Divider />

          {/* Filter buttons */}
          <ToggleButtonGroup
            value={filterDisplay}
            style={{ marginTop: "30px" }}
            exclusive
            onChange={changeDisplayType}
          >
            <ToggleButton value="All">All</ToggleButton>

            <ToggleButton value="Done">Done</ToggleButton>

            <ToggleButton value="Not Done">Not Done</ToggleButton>
          </ToggleButtonGroup>

          {/* // Filter buttons */}

          {/* Todos */}

          {todosJsx}

          {/* // Todos */}
        </CardContent>
        <Grid container spacing={1}>
          <Grid size={8}>
            <TextField
              id="outlined-basic"
              label="Adding a task"
              variant="outlined"
              style={{ width: "80%" }}
              value={TitleInput}
              onChange={(e) => setAddTitleInput(e.target.value)}
            />
          </Grid>
          <Grid size={4}>
            <Button
              size="small"
              variant="contained"
              style={{ width: "70%", height: "100%", marginRight: "500px" }}
              onClick={() => {
                handleAddButton();
              }}
              disabled={TitleInput.length == 0 ? true : false}
            >
              Add
            </Button>
          </Grid>
        </Grid>

        <CardActions>
          <Button size="normal">Learn More</Button>
        </CardActions>
      </Card>
      {/* Modal for delete confirmation */}
      <ModalDelete
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        todo={todoToDelete}
      />

      <ModalEdit
        open={openEditModal}
        onClose={handleCloseEditModal}
        todo={todoToEdit}
      />
    </Container>
  );
}
