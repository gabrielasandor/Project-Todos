const express = require("express");
import { Request, Response } from 'express';
const cors = require("cors")
const app = express();
app.use(express.json());

app.use(cors());
const fs = require("fs");


interface todoList {
  id: number;
  todo: string;
  isDone: boolean;
}

let todos: todoList[] = [];

const readUsersFromFile = () => {
  fs.readFile('todos.json', 'utf-8', (err: any, data: { toString: () => string; }) => {
      if (err) {
          console.error(err);
      } else {
          todos= JSON.parse(data.toString());
      }
  })
}

const writeUsersToFile = () => {
 fs.writeFile("todos.json", JSON.stringify(todos), (error: any) => {
      if (error) {
          console.error(error);
      }
  });
}


const getTodos = (req: Request, res: Response) => {
   const { error } = req.body;
   if (error) return res.status(400).send(error.details[0].message);
  res.send(todos);
};

const addTodo = (req: Request, res: Response) => {
  const { error } = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  const newval = {
    id: todos.length + 2,
    todo: req.body.todo,
    isDone: req.body.isDone
  };

  todos.push(newval);
  writeUsersToFile();
  res.send(newval);
};

const updateTodo = (req: Request, res: Response) => {
  const todo = todos.find((t: { id: number; }) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("The given id was not found.");
  const { error } = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  todo.todo = req.body.todo;
  todo.isDone = req.body.isDone
  writeUsersToFile();
  res.send(todo);
};
 

const deleteTodo = (req: Request, res: Response) => {
  const todo = todos.find((t: { id: number; }) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("The given id was not found.");

  const index = todos.indexOf(todo);
   todos.splice(index, 1);
   writeUsersToFile();
   res.send(todo);
};


app.get('/api/todos', getTodos);

app.post('/api/add', addTodo);

 app.put('/api/update/:id', updateTodo);

 app.delete('/api/delete/:id', deleteTodo);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  readUsersFromFile();
  console.log(`A pornit serverul pe portul: ${port}`);
});
