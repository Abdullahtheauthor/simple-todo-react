// import { Reddit } from "@mui/icons-material";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "green",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
