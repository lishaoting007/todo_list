import React from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div>
      <h1 className="header">todos</h1>
      <div className="wrap">
        <TodoHeader />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
