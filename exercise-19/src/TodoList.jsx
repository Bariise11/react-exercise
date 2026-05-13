import { useState } from "react";
import styles from "./app.module.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoBox}>
        <h1 className={styles.title}>My Todo List</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo..."
              className={styles.todoInput}
            />
            <button type="submit" className={styles.addBtn}>
              Add
            </button>
          </div>
        </form>

        <div className={styles.todoList}>
          {todos.map((todo) => (
            <div key={todo.id} className={styles.todoItem}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className={styles.checkbox}
              />

              <span
                className={`${styles.todoText} ${
                  todo.completed ? styles.done : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className={styles.emptyText}>No todos yet. Add some tasks above!</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;