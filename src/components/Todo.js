import React from 'react';
import Delete from './Delete';

const Todo = function(props) {
  const {status, toggleStatus, removeTodo, todo} = props;
  return (
    <div className="todo">
      <div className={`task ${status}`} onClick={toggleStatus}>
        {todo}
      </div>
      <Delete remove={removeTodo} />
    </div>
  );
};

export default Todo;
