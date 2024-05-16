import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState(['todo1', 'todo2']);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo}>{todo}</li>
            ))}
            <button onClick={() => setTodos([...todos, 'anotherOne'])}>Add todo</button>
        </ul>
    );
}

export default Todo;
