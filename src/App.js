import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h2>Welcome to React</h2>
        <h1>Todo List</h1>
      </header>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setinputText={setInputText} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
