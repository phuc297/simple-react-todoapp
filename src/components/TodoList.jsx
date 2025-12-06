import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList({ todos, toggleComplete, addTodo, deleteTodo }) {
  return (
    <>
      <div className="todo-list flex flex-col ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))}
      </div>
      <div className="todo-form">
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </>
  );
}
