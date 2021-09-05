import React from 'react';
import crossedOut from '../sounds/crossedout2.mp3';
import PlaySound from '../helper';

function TodoItem({todoList, setTodoList, todo}) {
    const classes = todo.completed===true ? "completed" : ""

    const toggleCompleted = () => {
        if(todo.completed===false) {
            PlaySound(crossedOut, 0.17)
        }
        const updatedTodoList = todoList.map((item) => {
            return item.id === todo.id ? { ...item, completed: !item.completed } : item
        })
        setTodoList(updatedTodoList)
    }

    return (
            <li className={classes}>
                <input 
                    type="checkbox" 
                    onClick={toggleCompleted}
                    defaultChecked={todo.completed}></input>
                <p>{todo.title}</p>
            </li>
    )
}

export default TodoItem;