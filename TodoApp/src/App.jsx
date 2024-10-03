import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todo")   // We can also use axios in this as it is much cleaner syntax
      .then(async (res) => {
        const json = await res.json();
        setTodos([json.todo]); 
      })
  }, []);    // [] is the dependency array which takes in any input and runs the useEffect if the value of the dependency array changes, if it does not or is blank, then it only runs once when the app starts 

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.key} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) { // our Componen
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
