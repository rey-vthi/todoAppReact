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
      allTodo.push({isDone: false, todo});
      return {todoList: allTodo};
    });
  }

  toggleTodoStatus(id) {
    this.setState(({todoList}) => {
      const allTodo = todoList.map(task => ({...task}));
      allTodo[id].isDone = !allTodo[id].isDone;
      return {todoList: allTodo};
    });
  }

  render() {
    const todoList = this.state.todoList.map(({isDone, todo}, index) => (
      <Todo
        done={isDone}
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
