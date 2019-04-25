import React, { Component } from 'react';
import '../../scss/todoHeader.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  render() {
    return (
      <input
        className="todoHeader"
        placeholder="What need to be done? "
        value={this.state.value}
        onChange={e => this.sendValueToState(e)}
        onKeyDown={e => this.handleKeyDown(e)}
      />
    );
  }
  sendValueToState = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      let item = {
        text: this.state.value,
        isEdit: false,
        isDone: false
      };
      this.props.addItem(item);
      this.setState({
        value: ''
      });
    }
  };
}

export default Header;
