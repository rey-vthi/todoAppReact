import React, {useState} from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';
import {getDefault, toggleStatus} from './statusIterator';
import TodoTitle from './TodoTitle';

const TodoList = function(props) {
  const [todoList, setTodoList] = useState([]);
  const [, setLastTaskId] = useState(0);
  const [title, setTitle] = useState('Todo');

  const updateTitle = function(title) {
    setTitle(title);
  };

  const removeAllTodo = function() {
    setTodoList([]);
  };

  const addNewTodo = function(todo) {
    setLastTaskId(id => {
      const newId = id + 1;
      setTodoList(list => list.concat({todo, id: newId, status: getDefault()}));
      return newId;
    });
  };

  const toggleTodoStatus = function(id) {
    setTodoList(todoList => {
      const allTodo = todoList.map(todo => ({...todo}));
      const todo = allTodo.find(todo => todo.id === id);
      todo.status = toggleStatus(todo.status);
      return allTodo;
    });
  };

  const removeTodo = function(id) {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  };

  const allTodos = todoList.map(({status, todo, id}, index) => (
    <Todo
      status={status}
      todo={todo}
      key={index}
      toggleStatus={() => toggleTodoStatus(id)}
      removeTodo={() => removeTodo(id)}
    />
  ));

  return (
    <div className="container">
      <TodoTitle
        title={title}
        updateTitle={updateTitle}
        removeAllTodo={removeAllTodo}
      />
      {allTodos}
      <InputBox onEnter={addNewTodo} value="" />
    </div>
  );
};

export default TodoList;
