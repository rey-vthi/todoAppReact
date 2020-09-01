import React from 'react';

const Todo = function(props) {
  const style = {
    done: 'done-todo',
    working: 'processing-todo',
    undone: 'pending-todo'
  };
  const textStyle = props.status === 'done' ? 'strike-through' : '';
  return (
    <div className="todo" onClick={() => props.toggleStatus(props.id)}>
      <div className={`status ${style[props.status]}`}></div>
      <span className={textStyle}>{props.todo}</span>
    </div>
  );
};

export default Todo;
