// import { Reddit } from "@mui/icons-material";
import "./App.css";
import MySnackBar from "./Components/MySnackBar";
import TodoList from "./Components/TodoList";
import { TodoProvider, TodosContext } from "./Contexts/TodosContext";
import { ToastContext, ToastProvider } from "./Contexts/ToastContext";

function App() {
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
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </div>
    </ToastProvider>
  );
}

export default App;
