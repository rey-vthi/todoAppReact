import React from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';
import {getDefault, toggleStatus} from './statusIterator';
import TodoTitle from './TodoTitle';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo',
      todoList: []
    };
    this.lastTaskId = 0;
    this.addNewTodo = this.addNewTodo.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addNewTodo(todo) {
    const nextId = this.lastTaskId + 1;
    this.setState(state => {
      const newTodo = {status: getDefault(), todo, id: nextId};
      return {todoList: [...state.todoList, newTodo]};
    });
    this.lastTaskId = nextId;
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
