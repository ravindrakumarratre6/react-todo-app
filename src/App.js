// src/App.js
import "./App.css";
import React, { useState,useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Todo App</h1>
        <button onClick={resetTodos} className="reset">Reset</button>
      </div>
      <TodoInput addTodo={addTodo} />
      <div className="todo-container">
        <div className="active-todos">
          <h2>Active Todos</h2>
          <TodoList todos={todos.filter((todo) => !todo.completed)} completeTodo={completeTodo} />
        </div>
        <div className="completed-todos">
          <h2>Completed Todos</h2>
          <TodoList todos={todos.filter((todo) => todo.completed)} completeTodo={completeTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
