import React, {useState, useEffect} from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';
import TodoTitle from './TodoTitle';
import todoApi from './todoAPI';

const TodoList = function(props) {
  const [allTodo, setTodoList] = useState({
    title: '',
    todoList: [],
    lastTaskId: 0
  });

  const updateTodoList = () => todoApi.getAllTodo().then(setTodoList);
  useEffect(() => {
    updateTodoList();
  }, []);

  const updateTitle = function(title) {
    todoApi.updateTitle(title).then(updateTodoList);
  };

  const deleteAllTodo = function() {
    todoApi.deleteAllTodo().then(updateTodoList);
  };

  const addTodo = function(todo) {
    todoApi.addTodo(todo).then(updateTodoList);
  };

  const toggleTodoStatus = function(id) {
    todoApi.toggleTodoStatus(id).then(updateTodoList);
  };

  const removeTodo = function(id) {
    todoApi.deleteTodo(id).then(updateTodoList);
  };

  const allTodos = allTodo.todoList.map(({status, todo, id}, index) => (
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
        title={allTodo.title}
        updateTitle={updateTitle}
        removeAllTodo={deleteAllTodo}
      />
      {allTodos}
      <InputBox onEnter={addTodo} value="" />
    </div>
  );
};

export default TodoList;
