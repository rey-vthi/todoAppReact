import React, {useState} from 'react';

const InputBox = function(props) {
  const [text, setText] = useState(props.value);

  const updateText = function(event) {
    const txt = event.target.value;
    setText(txt);
  };

  const addTodo = function(event) {
    if (event.keyCode === 13 && text !== '') {
      props.onEnter(text);
      setText('');
    }
  };
  return (
    <input
      className="todo-feeder"
      onChange={updateText}
      onKeyDown={addTodo}
      value={text}
    ></input>
  );
};

export default InputBox;
