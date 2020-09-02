import React from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';
import {getDefault, toggleStatus} from './statusIterator';
import TodoTitle from './TodoTitle';

const generateId = function() {
  let id = 0;
  return () => id++;
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo',
      todoList: []
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.generateId = generateId();
    this.removeTodo = this.removeTodo.bind(this);
  }

  addNewTodo(todo) {
    this.setState(state => {
      const newTodo = {status: getDefault(), todo, id: this.generateId()};
      return {todoList: [...state.todoList, newTodo]};
    });
  }

  updateTodoStatus(id) {
    this.setState(({todoList}) => {
      const allTodo = todoList.map(todo => ({...todo}));
      const todo = allTodo.find(todo => todo.id === id);
      todo.status = toggleStatus(todo.status);
      return {todoList: allTodo};
    });
  }

  updateTitle(title) {
    this.setState({title});
  }

  removeTodo(id) {
    this.setState(state => {
      const todoList = state.todoList.filter(todo => todo.id !== id);
      return {todoList};
    });
  }

  render() {
    const todoList = this.state.todoList.map(({status, todo, id}, index) => (
      <Todo
        status={status}
        todo={todo}
        key={index}
        id={id}
        toggleStatus={this.updateTodoStatus}
        removeTodo={this.removeTodo}
      />
    ));
    return (
      <div className="container">
        <TodoTitle title={this.state.title} updateTitle={this.updateTitle} />
        {todoList}
        <InputBox onEnter={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
