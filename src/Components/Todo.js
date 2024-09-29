import * as React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState } from "react";

// import icons
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { TodosContext } from "../Contexts/TodosContext";
import { useContext } from "react";
export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  // console.log(todos);

  function handleCheckClick() {
    // alert(`${id}`);
    const updatedTodos = todos.map((t) => {
      console.log("kkkkkkk", todo.id);
      console.log("ttttt", t.id);
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });

    // console.log(todo);
    setTodos(updatedTodos);
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
                  <Button
                    variant="text"
                    style={{ background: "white" }}
                    className="iconButton"
                    sx={{ minHeight: 70, minWidth: 70 }}
                  >
                    <EditIcon style={{ color: "#00c853" }} />
                  </Button>

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
                  >
                    {" "}
                    <DeleteIcon style={{ color: "red" }} />
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
