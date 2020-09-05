import React, {useState, useRef} from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';
import {getDefault, toggleStatus} from './statusIterator';
import TodoTitle from './TodoTitle';

const TodoList = function(props) {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('Todo');
  const taskId = useRef(0);

  const updateTitle = function(title) {
    setTitle(title);
  };

  const removeAllTodo = function() {
    setTodoList([]);
  };

  const addNewTodo = function(todo) {
    taskId.current = taskId.current + 1;
    setTodoList(list =>
      list.concat({todo, id: taskId.current, status: getDefault()})
    );
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
