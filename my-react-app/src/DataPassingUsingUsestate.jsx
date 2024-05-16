import { useState } from "react";

function Todo() {
  // Declare a state variable `todos` using useState
  // This variable will hold an array of todo items (strings)
  const [todos, setTodos] = useState(['todo1', 'todo2']);

  // Render the todo list
  return (
    <ul>
      {/* Map over the todos array and render each todo item as an <li> element */}
      {todos.map(todo => (
        <li key={todo}>{todo}</li>
      ))}

      {/* Add Button to add a new todo item */}
      <button onClick={() => setTodos([...todos, 'anotherOne'])}>
        Add todo
      </button>
    </ul>
  );
}

export default Todo;
