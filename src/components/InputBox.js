import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({text});
  }

  handleEnter(event) {
    if (event.keyCode === 13 && this.state.text !== '') {
      this.props.onEnter(this.state.text);
      return this.setState({text: ''});
    }
  }
  render() {
    return (
      <input
        className="todo-feeder"
        onChange={e => this.handleChange(e)}
        onKeyDown={e => this.handleEnter(e)}
        value={this.state.text}
      ></input>
    );
  }
}

export default InputBox;
