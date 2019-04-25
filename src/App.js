import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import ItemFooter from './components/TodoFooter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: [
        {
          text: '学习高级JS',
          isEdit: false,
          isDone: false
        }
      ],
      status: 1 // 1: 全部 2: 未完成 3: 已完成
    };
  }
  render() {
    const { todoText, status } = this.state;
    return (
      <div>
        <h1 className="header">todos</h1>
        <div className="wrap">
          <TodoHeader addItem={this.addItem} />
          <ul>
            {todoText.map((item, index) => {
              if (status === 1) {
                return (
                  <TodoItem
                    item={item}
                    key={index}
                    index={index}
                    changeEdit={this.changeEdit}
                    removeOne={this.removeOne}
                  />
                );
              } else if (status === 2) {
                if (!item.isDone) {
                  return (
                    <TodoItem
                      item={item}
                      key={index}
                      index={index}
                      changeEdit={this.changeEdit}
                      removeOne={this.removeOne}
                    />
                  );
                }
              } else if (status === 3) {
                if (item.isDone) {
                  return (
                    <TodoItem
                      item={item}
                      key={index}
                      index={index}
                      changeEdit={this.changeEdit}
                      removeOne={this.removeOne}
                    />
                  );
                }
              }
            })}
          </ul>
          <ItemFooter
            todoText={todoText}
            changeStatus={this.changeStatus}
            removeDone={this.removeDone}
          />
        </div>
      </div>
    );
  }
  addItem = item => {
    let newArr = [...this.state.todoText];
    newArr.push(item);
    this.setState({
      todoText: newArr
    });
  };
  changeEdit = (item, index) => {
    return new Promise(resolve => {
      let newArr = [...this.state.todoText];
      newArr[index] = item;
      this.setState({
        todoText: newArr
      });
      resolve();
    });
  };
  removeOne = index => {
    const newArr = [...this.state.todoText];
    newArr.splice(index, 1);
    this.setState({
      todoText: newArr
    });
  };
  changeStatus = status => {
    this.setState({
      status: status
    });
  };
  removeDone = () => {
    const { todoText } = this.state;
    let newArr = todoText.filter(item => !item.isDone);
    this.setState({
      todoText: newArr
    });
  };
}

export default App;
