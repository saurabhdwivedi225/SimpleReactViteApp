import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Person, Button, Header, List } from "./react-component-tasks";
import Counter from "./useState";
import TodoEditor from "./conditionalrendering";
import Todo from "./DataPassingUsingUsestate"

const container = document.getElementById('root');

// Create a React root within the 'container' element
const root = ReactDOM.createRoot(container);

// Render the React application using JSX syntax
root.render(
  <>
    <App name="Place1" image="https://images.unsplash.com/photo-1715273157640-b0c2a2bec178?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" />

<Counter/>    
    <Person name="Saurabh" age="20" />
    
    <Button text="Click me" onClick={() => alert("Button clicked")} />

    <Header title="Welcome to my world. Explore the World" />

    <List items={["Apple", "Banana", "Peanut"]} />
    <TodoEditor/>
    <Todo/>
  </>
);

