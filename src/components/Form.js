import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import TodoList from './TodoList';

const Form = ({ setinputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setinputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        // setTodos([
        //     ...Todos,
        //     {text: inputText, completed: false, id: Math.random() * 1000}
        // ]);
        //  setInputText("");
    };

    return (
        <form>
          <input 
      //value={inputText} 
          onChange={inputTextHandler} 
          type="text" className="todo-input"
          />
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
             <i className="fas fa-plus-square">Add</i> </button>
          <div className="select">
              <select name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
              </select>
          </div>
        </form>
    )
}

export default Form;
