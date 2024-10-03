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

// import { useState } from "react";
import { TodosContext } from "../Contexts/TodosContext";
import { useContext, useEffect, useState } from "react";

// import ModalDelete from "./ModalDelete";

// External libraries
import { uid } from "uid";

import Todo from "./Todo";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [TitleInput, setAddTitleInput] = useState("");

  function handleAddButton() {
    // alert("heloo");
    const newtodo = {
      id: uid(7),
      title: TitleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newtodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo
  }

  const todosJsx = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storageTodos);
  }, []);
  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{}} variant="h2">
            My Tasks
          </Typography>
          <Divider />

          {/* Filter buttons */}
          <ToggleButtonGroup
            // value={alignment}
            style={{ marginTop: "30px" }}
            exclusive
            // onChange={handleAlignment}
          >
            <ToggleButton value="left">All</ToggleButton>

            <ToggleButton value="center">Done</ToggleButton>

            <ToggleButton value="right">Not Done</ToggleButton>
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
            >
              Add
            </Button>
          </Grid>
        </Grid>

        <CardActions>
          <Button size="normal">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
