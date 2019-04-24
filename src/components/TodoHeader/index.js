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
        onChange={e => this.sendValue(e)}
      />
    );
  }
  sendValue = e => {
    this.setState({
      value: e.target.value
    });
  };
}

export default Header;
