import React from 'react';

const Todo = function(props) {
  const style = {
    done: {color: 'todo-box done-todo', textIndicator: 'strike-through'},
    working: {color: 'todo-box processing-todo', textIndicator: 'text'},
    undone: {color: 'todo-box pending-todo', textIndicator: 'text'}
  };
  const {color, textIndicator} = style[props.status];
  return (
    <div className="todo" onClick={() => props.toggleStatus(props.id)}>
      <div className={color}></div>
      <span className={textIndicator}>{props.todo}</span>
    </div>
  );
};

export default Todo;
