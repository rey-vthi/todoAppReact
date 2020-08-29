import React from 'react';
const Todo = function(props) {
  const {indicator, textIndicator} = props.done
    ? {indicator: 'done-todo', textIndicator: 'strike-through'}
    : {indicator: 'pending-todo', textIndicator: 'text'};
  return (
    <div className="todo" onClick={() => props.toggleStatus(props.id)}>
      <div className={indicator}></div>
      <span className={textIndicator}>{props.todo}</span>
    </div>
  );
};

export default Todo;
