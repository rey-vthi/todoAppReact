import React from 'react';

const Todo = function(props) {
  const {status, id, toggleStatus, removeTodo, todo} = props;
  return (
    <div className="todo">
      <div className={`task ${status}`} onClick={() => toggleStatus(id)}>
        {todo}
      </div>
      <div className="remove" onClick={() => removeTodo(id)}>
        X
      </div>
    </div>
  );
};

export default Todo;
