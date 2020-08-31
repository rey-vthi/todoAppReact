import React from 'react';

const getIndicators = function(status) {
  if (status.isDone) {
    return {color: 'todo-box done-todo', textIndicator: 'strike-through'};
  }
  if (status.isProcessing) {
    return {color: 'todo-box processing-todo', textIndicator: 'text'};
  }
  return {color: 'todo-box pending-todo', textIndicator: 'text'};
};

const Todo = function(props) {
  const {color, textIndicator} = getIndicators(props.status);
  return (
    <div className="todo" onClick={() => props.toggleStatus(props.id)}>
      <div className={color}></div>
      <span className={textIndicator}>{props.todo}</span>
    </div>
  );
};

export default Todo;
