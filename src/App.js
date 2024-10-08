// import { Reddit } from "@mui/icons-material";
import "./App.css";
import MySnackBar from "./Components/MySnackBar";
import TodoList from "./Components/TodoList";
import { TodosContext } from "./Contexts/TodosContext";
import { ToastContext, ToastProvider } from "./Contexts/ToastContext";

import { useState } from "react";

import { uid } from "uid";

const todosIntial = [
  {
    id: uid(7),
    title: "Task1",
    details: "Studing something 1",
    isCompleted: false,
  },
  {
    id: uid(7),
    title: "Task2",
    details: "Studing something 2",
    isCompleted: false,
  },
  {
    id: uid(7),
    title: "Task3",
    details: "Studing something 3",
    isCompleted: false,
  },
];
// console.log("iddddd", uid(7));

function App() {
  const [todos, setTodos] = useState(todosIntial);
  // const [open, setOpen] = useState(false);
  // const [toastMessage, setToastMessage] = useState("");

  // function showHideToast(message) {
  //   setOpen(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 2000);
  //   setToastMessage(message);
  // }

  return (
    <ToastProvider>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
          // background: "green",
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ToastProvider>
  );
}

export default App;
