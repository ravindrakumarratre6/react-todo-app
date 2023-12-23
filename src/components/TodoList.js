// src/components/TodoList.js
import "../CSS/TodoList.css";
import React from "react";

const TodoList = ({ todos, completeTodo }) => {
  return (
    <ul className="todolist-container">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          <span className="todo-text">{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
