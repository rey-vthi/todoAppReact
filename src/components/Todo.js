import React from 'react';

const Todo = function(props) {
  return (
    <div className="todo">
      <div
        className={`task ${props.status}`}
        onClick={() => props.toggleStatus(props.id)}
      >
        {props.todo}
      </div>
      <div className="remove" onClick={() => props.removeTodo(props.id)}>
        X
      </div>
    </div>
  );
};

export default Todo;
