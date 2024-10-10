import { uid } from "uid";
export default function Todosreducer(currentTodos, action) {
  console.log("action 00000", action.payload.newTitle);
  switch (action.type) {
    case "addTodo": {
      const newtodo = {
        id: uid(7),
        title: action.payload.newTitle,
        details: "",
        isCompleted: false,
      };
      const updatedTodos = [...currentTodos, newtodo];

      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo

      return updatedTodos;
    }
  }
  throw Error("Unknown action: " + action.type);
}
