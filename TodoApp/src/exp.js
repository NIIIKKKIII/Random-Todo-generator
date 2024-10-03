// In react we usually use import and not require
import express from "express";
import cors from "cors";   // for cross origin requests
import { Todos } from "./data.js";

const app = express();


app.use(cors());

app.get("/todo", (req, res) => {
  const randomIndex = Math.floor(Math.random() * Todos.length);  
  const randomTodo = Todos[randomIndex];
  res.json({ todo: randomTodo });   // single object as we want to give a single todo and not all
});

app.listen(3001, () => {
  console.log("The server is now live on port 3001");
});

export default app;
