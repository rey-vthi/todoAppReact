import React, {useState} from 'react';
import InputBox from './InputBox';
import '../App.css';
import Delete from './Delete';

const TodoTitle = function(props) {
  const [isEditable, setEditable] = useState(false);

  const toggleEditStatus = function() {
    setEditable(s => !s);
  };

  const updateNewTitle = function(title) {
    props.updateTitle(title);
    toggleEditStatus();
  };

  const editableText = (
    <InputBox
      className="todo-title"
      value={props.title}
      onEnter={updateNewTitle}
    />
  );

  const text = (
    <div className="todo">
      <h2 className="todo-title" onClick={toggleEditStatus}>
        {props.title}
      </h2>
      <Delete remove={props.removeAllTodo} />
    </div>
  );

  return <div>{isEditable ? editableText : text}</div>;
};

export default TodoTitle;
