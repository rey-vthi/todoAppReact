import React from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';
import {getDefault, toggleStatus} from './statusIterator';
import Header from './Header';

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
  }

  addNewTodo(todo) {
    this.setState(state => {
      const newTodo = {status: getDefault(), todo};
      return {todoList: [...state.todoList, newTodo]};
    });
  }

  updateTodoStatus(id) {
    this.setState(({todoList}) => {
      const allTodo = todoList.map(todo => ({...todo}));
      const {status, todo} = allTodo[id];
      allTodo[id] = {status: toggleStatus(status), todo};
      return {todoList: allTodo};
    });
  }

  updateTitle(title) {
    this.setState(({todoList}) => {
      return {todoList, title};
    });
  }

  render() {
    const todoList = this.state.todoList.map(({status, todo}, index) => (
      <Todo
        status={status}
        todo={todo}
        key={index}
        id={index}
        toggleStatus={this.updateTodoStatus}
      />
    ));
    return (
      <div className="container">
        <Header title={this.state.title} updateTitle={this.updateTitle} />
        {todoList}
        <InputBox onEnter={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
