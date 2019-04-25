import React, { Component } from 'react';
import '../../scss/todoFooter.scss';

class ItemFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { todoText, index } = this.props;
    const undoneTodo = todoText.filter(item => !item.isDone);
    const doneTodo = todoText.find(item => item.isDone === true);
    return (
      <div className="footerWrap">
        <div
          className={doneTodo ? 'rightBtn' : 'rightBtn-vanish'}
          onClick={() => this.removeDone(index)}
        >
          Clear completed
        </div>
        <span className="leftNum">{undoneTodo.length} items left</span>
        <ul>
          <li className="middleActive" onClick={this.showAll}>
            All
          </li>
          <span className="blank" />
          <li className="middleActive" onClick={this.showActive}>
            Active
          </li>
          <span className="blank" />
          <li className="middleActive" onClick={this.showComleted}>
            Completed
          </li>
        </ul>
      </div>
    );
  }
  showAll = e => {
    this.props.changeStatus(1);
    let lis = document.querySelectorAll('.footerWrap li');
    console.log(lis);
    Array.from(lis).forEach(item => (item.className = 'middleActive'));
    e.target.className = 'middleActive-active';
  };
  showActive = e => {
    this.props.changeStatus(2);
    let lis = document.querySelectorAll('.footerWrap li');
    Array.from(lis).forEach(item => (item.className = 'middleActive'));
    e.target.className = 'middleActive-active';
  };
  showComleted = e => {
    this.props.changeStatus(3);
    let lis = document.querySelectorAll('.footerWrap li');
    Array.from(lis).forEach(item => (item.className = 'middleActive'));
    e.target.className = 'middleActive-active';
  };
  removeDone = index => {
    this.props.removeDone(index);
  };
}

export default ItemFooter;
