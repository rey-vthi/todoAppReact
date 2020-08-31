import React from 'react';
import InputBox from './InputBox';
import Todo from './Todo';
import '../App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
  }

  handleEnter(todo) {
    this.setState(state => {
      const allTodo = state.todoList.slice();
      allTodo.push({status: {isDone: false, isProcessing: false}, todo});
      return {todoList: allTodo};
    });
  }

  getUpdatedTodoStatus(status) {
    const {isDone, isProcessing} = status;
    const todoStatus = {
      1: {isDone: false, isProcessing: false},
      2: {isDone: false, isProcessing: true},
      3: {isDone: true, isProcessing: false}
    };
    if (!isDone && !isProcessing) return todoStatus[2];
    if (isProcessing) return todoStatus[3];
    if (isDone) return todoStatus[1];
  }

  toggleTodoStatus(id) {
    this.setState(({todoList}) => {
      const allTodo = todoList.map(todo => ({...todo}));
      const {status, todo} = {...allTodo[id]};
      const updatedStatus = this.getUpdatedTodoStatus(status);
      allTodo[id] = {status: updatedStatus, todo};
      return {todoList: allTodo};
    });
  }

  render() {
    const todoList = this.state.todoList.map(({status, todo}, index) => (
      <Todo
        status={status}
        todo={todo}
        key={index}
        id={index}
        toggleStatus={this.toggleTodoStatus}
      />
    ));
    return (
      <div className="container">
        <p className="title">Todo</p>
        {todoList}
        <InputBox onEnter={this.handleEnter} />
      </div>
    );
  }
}

export default TodoList;
