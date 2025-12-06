import { useState } from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const [todoLists, setTodoLists] = useState([
    {
      id: crypto.randomUUID(),
      name: "household chores",
      todos: [
        { id: crypto.randomUUID(), text: "wash dish", isCompleted: false },
        { id: crypto.randomUUID(), text: "do laundry", isCompleted: true },
        { id: crypto.randomUUID(), text: "buy groceries", isCompleted: false },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "study",
      todos: [
        { id: crypto.randomUUID(), text: "do homework", isCompleted: false },
        {
          id: crypto.randomUUID(),
          text: "research project",
          isCompleted: true,
        },
      ],
    },
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  // const [todos, setTodos] = useState([]);
  // const currentTodos = todoLists[currentIdx].todos

  function addList() {
    const nameTodos = prompt("Enter name todo list:");
    const newTodos = {
      id: crypto.randomUUID(),
      name: nameTodos,
      todos: [],
    };
    setTodoLists((todoLists) => [...todoLists, newTodos]);
  }

  function toggleComplete(id) {
    // const completedTodos = todos.map((todo) =>
    //   todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    // );
    // setTodos(new_todos);
    setTodoLists((prev) =>
      prev.map((list, index) => {
        if (index != currentIdx) return list;

        return {
          ...list,
          todos: list.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        };
      })
    );
  }

  function addTodo(todoText) {
    if (!todoText.trim()) return;
    const todo = {
      id: crypto.randomUUID(),
      text: todoText,
      isCompleted: false,
    };
    // setTodos((todos) => [...todos, todo]);
    setTodoLists((prev) =>
      prev.map((list, index) => {
        if (index != currentIdx) return list;
        return {
          ...list,
          todos: [...list.todos, todo],
        };
      })
    );
  }

  function deleteTodo(id) {
    // setTodos((todos) => todos.filter((todo) => todo.id != id));
    setTodoLists((prev) =>
      prev.map((list, index) => {
        if (index != currentIdx) return list;
        return {
          ...list,
          todos: list.todos.filter((todo) => todo.id != id),
        };
      })
    );
  }

  return (
    <>
      <div className="todo-app min-h-screen flex justify-center items-center">
        <div className="flex justify-between space-x-20">
          <div className="flex flex-col space-y-1">
            <p>Todo Lists: </p>
            {todoLists.map((todoList, index) => (
              <button
                key={todoList.id}
                onClick={() => setCurrentIdx(index)}
                className="border border-gray-500"
              >
                {todoList.name}
              </button>
            ))}
            <button
              onClick={addList}
              className="border border-green-500 bg-green-200"
            >
              New todos +{" "}
            </button>
          </div>
          <div>
            <TodoList
              todos={todoLists[currentIdx].todos}
              toggleComplete={toggleComplete}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
            ></TodoList>
          </div>
        </div>
      </div>
    </>
  );
}
