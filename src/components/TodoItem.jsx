export default function TodoItem({ task, toggleComplete, deleteTodo }) {
  function onClickDelete() {
    deleteTodo(task.id);
  }

  return (
    <>
      <div className="flex justify-between min-w-full">
        <label
          className={`${
            task.isCompleted ? "line-through text-gray-300" : "text-gray-700"
          }`}
        >
          {task.text}
        </label>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            id={task.id}
            onChange={() => toggleComplete(task.id)}
            checked={task.isCompleted}
          />
          <input
            className="hover:underline cursor-pointer"
            key={task.id}
            onClick={onClickDelete}
            type="button"
            value="del"
          />
        </div>
      </div>
    </>
  );
}
