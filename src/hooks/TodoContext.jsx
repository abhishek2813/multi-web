import React, { createContext, useEffect, useState } from "react";
export const TodoData = createContext();
export function TodoContext({ children }) {
  //example of todos
  // {
  //   id:1,
  //   name:"hey i am conetxt",
  //   isComplete:false
  // }
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    let newArr = todos.filter((item) => item.id !== id);
    setTodos(newArr);
  };
  const updateTodo = (id, newTodo) => {
    const newArr = todos.map((item) => {
      if (item.id === id) {
        item.name = newTodo;
      }
      return item;
    });
    setTodos(newArr);
  };
  const completeTodo = (id) => {
    const newArr = todos.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setTodos(newArr);
  };
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("todos"));
    setTodos(localData);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoData.Provider
      value={{ todos, addTodo, completeTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoData.Provider>
  );
}
