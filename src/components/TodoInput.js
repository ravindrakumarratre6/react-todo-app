// src/components/TodoInput.js
import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <input
      style={styles.input}
      type="text"
      placeholder="Add a New Todo......"
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};
const styles = {
  input: {
    width: "20rem",
    fontSize: "20px",
  },
};
export default TodoInput;
