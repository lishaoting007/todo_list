import React, { Component } from 'react';
import '../../scss/todoItem.scss';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInput: false
    };
  }
  render() {
    return !this.state.isInput ? (
      <li className="itemWrap">
        <input className="checkbox" type="checkbox" />
        <span>学习</span>
        <button className="btn">删除</button>
      </li>
    ) : (
      <li className="itemWrap">
        <input className="checkbox" type="checkbox" />
        <input type="text" />
      </li>
    );
  }
}

export default TodoItem;
