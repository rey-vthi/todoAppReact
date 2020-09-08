const express = require('express');
const app = express();
const {toggleStatus, getDefault} = require('./statusIterator');

app.locals.Todo = {title: 'Todo', todoList: [], lastTaskId: 0};

app.use(express.json());

app.get('/api/getAllTodo', (req, res) => {
  res.json(req.app.locals.Todo);
});

app.post('/api/addTodo', (req, res) => {
  const {todo} = req.body;
  const {Todo} = req.app.locals;
  Todo.lastTaskId++;
  Todo.todoList.push({todo, id: Todo.lastTaskId, status: getDefault()});
  res.end();
});

app.post('/api/toggleTodoStatus', (req, res) => {
  const {todoId} = req.body;
  const {Todo} = req.app.locals;
  const task = Todo.todoList.find(task => task.id === todoId);
  task.status = toggleStatus(task.status);
  res.end();
});

app.post('/api/deleteTodo', (req, res) => {
  const {todoId} = req.body;
  const {Todo} = req.app.locals;
  Todo.todoList = Todo.todoList.filter(task => task.id !== todoId);
  res.end();
});

app.post('/api/updateTitle', (req, res) => {
  const {title} = req.body;
  const {Todo} = req.app.locals;
  Todo.title = title;
  res.end();
});

app.post('/api/deleteAllTodo', (req, res) => {
  const {Todo} = req.app.locals;
  Todo.todoList = [];
  Todo.lastTaskId = 0;
  res.end();
});

app.listen(3001, () => console.log('server listening at 3001'));
