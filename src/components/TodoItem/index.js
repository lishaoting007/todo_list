import React, { Component } from 'react';
import '../../scss/todoItem.scss';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  render() {
    const { item, index, removeOne } = this.props;
    return !item.isEdit ? (
      <li className="itemWrap">
        <input
          className="checkbox"
          type="checkbox"
          name="isDone"
          value={item.isDone}
          checked={item.isDone}
          onChange={this.handleChange}
        />
        <div
          className={item.isDone ? 'textWrap2' : 'textWrap1'}
          onDoubleClick={this.handleDoubleClick}
        >
          <span>{item.text}</span>
        </div>
        <div
          className="btn"
          onClick={() => {
            removeOne(index);
          }}
        >
          x
        </div>
      </li>
    ) : (
      <li className="itemWrap">
        <input
          className="textBox"
          type="text"
          name="text"
          value={item.text}
          ref="Editor"
          onBlur={this.handleBlur}
          onKeyDown={this.handleEnter}
          onChange={this.handleChange}
        />
      </li>
    );
  }
  handleChange = e => {
    const { changeEdit, index, item } = this.props;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    changeEdit(
      {
        ...item,
        [e.target.name]: value
      },
      index
    );
  };
  handleDoubleClick = () => {
    const { changeEdit, index, item } = this.props;
    changeEdit(
      {
        ...item,
        isEdit: true
      },
      index
    ).then(() => {
      this.refs.Editor.focus();
    });
  };
  handleBlur = () => {
    this.props.changeEdit(
      {
        ...this.props.item,
        text: this.refs.Editor.value,
        isEdit: false
      },
      this.props.index
    );
  };
  handleEnter = e => {
    if (e.keyCode === 13) {
      this.props.changeEdit(
        {
          ...this.props.item,
          text: this.refs.Editor.value,
          isEdit: false
        },
        this.props.index
      );
    }
  };
}

export default TodoItem;
