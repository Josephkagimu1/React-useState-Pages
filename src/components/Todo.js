import React from 'react'

const Todo = () => {
    return (
        <div className="todo">

            <li className="todo-item">Heyyy</li>

            <button className="complete-btn"> 
                <i className="fas fa-check">Saved</i> 
            </button>

            <button className="trash-btn"> 
                <i className="fas fa-trash">Delete</i> 
            </button>

        </div>
    )
}

export default Todo
