import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todo") 
      .then(async (res) => {
        const json = await res.json();
        setTodos([json.todo]); 
      })
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.key} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
