import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

let data = [
  {"id": 1, "title": "Exercise", "completed": false},
  {"id": 2, "title": "Buy groceries for dinner", "completed": false},
  {"id": 3, "title": "Feed cats", "completed": true},
  {"id": 4, "title": "Water plants", "completed": true},
  {"id": 5, "title": "Update portofolio", "completed": false},
];

if(localStorage.getItem("data")===null) {
  localStorage.setItem("data", JSON.stringify(data))
} else {
  data = JSON.parse(localStorage.getItem("data"))
}

function App() {
  const [todoList, setTodoList] = useState(data);

  return (
    <div className="App wrapper">
      <div className="container-main">
      <Header></Header>
      <main>
        <TodoInput todoList={todoList} setTodoList={setTodoList}></TodoInput>
        <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
      </main>
      </div>
    </div>
  );
}

export default App;
