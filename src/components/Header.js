import React from 'react';
import InputBox from './InputBox';

class Header extends React.Component {
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
      <InputBox value={this.props.title} onEnter={this.updateTitle} />
    );
    const text = (
      <p className="title" onClick={this.toggleEditStatus}>
        {this.props.title}
      </p>
    );
    return <div>{this.state.isEditable ? editableText : text}</div>;
  }
}

export default Header;
