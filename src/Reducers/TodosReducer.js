import { uid } from "uid";
export default function Todosreducer(currentTodos, action) {
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
    case "deleteTodo": {
      console.log("currentTodos inside reducer delete", currentTodos);

      console.log(`Deleting todo with id: ${action.payload.id}`);

      const updatedTodos = currentTodos.filter((t) => {
        return t.id !== action.payload.id;
      });

      console.log("t.iddddd", updatedTodos);

      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo
      return updatedTodos;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
