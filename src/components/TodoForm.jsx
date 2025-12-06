export default function TodoForm({ addTodo }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    const todoText = formData.get("toDoText");
    addTodo(todoText);
    event.target.reset()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-fit justify-center items-center"
      >
        <input type="text" name="toDoText" className="border border-gray-500" />
        <button type="submit" className="border border-gray-500 w-fit">
          Add
        </button>
      </form>
    </>
  );
}
