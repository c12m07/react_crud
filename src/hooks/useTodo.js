import { useState } from "react";

function useTodo() {
  const [todos, setTodos] = useState([]);

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(item) {
    setTodos(prev => [...prev, item]);
  }

  function editTodo(editedTodo) {
    const newTodos = todos.map(todo => {
      if (editedTodo.id === todo.id) {
        return { ...todo, name: editedTodo.name };
      }
      return todo;
    });
    setTodos(newTodos);
  } 


  return { todos, setTodos, deleteTodo, addTodo, editTodo };
}

export default useTodo;