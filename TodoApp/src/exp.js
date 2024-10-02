import express from "express";
import cors from "cors"; 
import { Todos } from "./data.js";

const app = express();


app.use(cors());

app.get("/todo", (req, res) => {
  const randomIndex = Math.floor(Math.random() * Todos.length);
  const randomTodo = Todos[randomIndex];
  res.json({ todo: randomTodo }); 
});

app.listen(3001, () => {
  console.log("The server is now live on port 3001");
});

export default app;
