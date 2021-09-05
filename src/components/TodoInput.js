import React, { useState, useEffect } from 'react';
import popSound from '../sounds/pop.flac';
import PlaySound from '../helper';

function generateId(array) {
    const ids = array.map((item) => item.id);
    if(ids.length<1) return 1;
    return Math.max(...ids) + 1;
}

function TodoInput({ todoList, setTodoList }) {
    const [todoInput, setTodoInput] = useState("")

    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        PlaySound(popSound, 1)
        if (todoInput) {
            const newTodo = {
                "id": generateId(todoList),
                "title": todoInput.trim(),
                "completed": false
            }

            setTodoList([...todoList, newTodo]);
            setTodoInput("");
        }
    }

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(todoList))
    }, [todoList])

    return (
        <div className="input-form">
            

            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo..."
                className="todo-input"
                value={todoInput}
                onChange={handleChange}
            />
            </form>
        </div>
    )
}

export default TodoInput;