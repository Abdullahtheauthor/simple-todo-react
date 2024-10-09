import { createContext, useContext } from "react";
import { useState } from "react";

import { uid } from "uid";

const TodosContext = createContext([]);

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

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosIntial);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodosContext);
};
