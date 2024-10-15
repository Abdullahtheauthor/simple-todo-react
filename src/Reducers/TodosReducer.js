import { uid } from "uid";
export default function TodosReducer(currentTodos, action) {
  console.log("currentTodos inside reducer normal", currentTodos);
  console.log("currentTodos inside reducer normal", action.payload);
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
      console.log(
        "currentTodos inside reducer delete****$$$$$$$",
        currentTodos
      );

      console.log(`Deleting todo with id: ${action.payload.id}`);

      const updatedTodos = currentTodos.filter((t) => {
        return t.id !== action.payload.id;
      });

      console.log("t.iddddd", updatedTodos);

      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Clear the input field after adding a todo
      return updatedTodos;
    }
    case "editTodo": {
      console.log("outside map", action.payload.id);
      const updatedTodos = currentTodos.map((t) => {
        if (t.id == action.payload.id) {
          return {
            ...t,
            title: action.payload.title,
            details: action.payload.details,
          };
        } else {
          return t;
        }
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }
    case "checked": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            isCompleted: !action.payload.isCompleted,
          };
          // t.isCompleted = !t.isCompleted;
        }

        return t;
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      console.log("whaaat", updatedTodos);
      return updatedTodos;
    }

    case "get": {
      const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
      return storageTodos;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
