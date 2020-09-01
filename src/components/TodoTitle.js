import React from 'react';
import InputBox from './InputBox';
import '../App.css';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditable: false};
    this.updateTitle = this.updateTitle.bind(this);
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
  }

  updateTitle(title) {
    this.props.updateTitle(title);
    this.toggleEditStatus();
  }

  toggleEditStatus() {
    this.setState(state => ({isEditable: !state.isEditable}));
  }

  render() {
    const editableText = (
      <InputBox
        className="todo-title"
        value={this.props.title}
        onEnter={this.updateTitle}
      />
    );
    const text = (
      <h2 className="todo-title" onClick={this.toggleEditStatus}>
        {this.props.title}
      </h2>
    );
    return <div>{this.state.isEditable ? editableText : text}</div>;
  }
}

export default TodoTitle;
