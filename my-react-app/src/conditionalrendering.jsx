import { useState } from "react";

function TodoEditor() {
    const [isEditing, setEditing] = useState(false)
    return (
        <>
        {
            (isEditing) ? <input/> : <h1>Some todo</h1>
        }
        <button onClick={() => {setEditing(!isEditing)}}>Click Me</button>
        </>
        
    )
}
export default TodoEditor;