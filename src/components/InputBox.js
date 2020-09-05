import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.value};
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({text});
  }

  addTodo(event) {
    if (event.keyCode === 13 && this.state.text !== '') {
      this.props.onEnter(this.state.text);
      return this.setState({text: ''});
    }
  }
  render() {
    return (
      <input
        className="todo-feeder"
        onChange={this.handleChange}
        onKeyDown={this.addTodo}
        value={this.state.text}
      ></input>
    );
  }
}

export default InputBox;
