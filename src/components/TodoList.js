import React from 'react';
import TodoItem from './TodoItem';
import pageFlip from '../sounds/pageflip.mp3';
import done from '../sounds/done2.mp3';
import PlaySound from '../helper';

function TodoList({todoList, setTodoList}) {

    const clearAll = () => {
        PlaySound(pageFlip, 1)
        localStorage.setItem("data", '[]')
        setTodoList([])
    }

    const clearFinished = () => {
        PlaySound(done, 1)
        const updatedList = todoList.filter(item => item.completed === false)
        localStorage.setItem("data", updatedList)
        setTodoList(updatedList)
    }

    return (
        <section className="todo-list-section">
            {todoList.length>0 ? (
            <ul className="todo-list">
            {
                todoList.map(item => 
                    <TodoItem
                        todoList={todoList}
                        setTodoList={setTodoList}
                        todo={item}
                        key={item.id}
                        >
                    </TodoItem>)
                }
            </ul>
            ) : (
                <p className="info-text">Empty todo</p>
            )}

            <div className="actions-wrapper">
            <button onClick={clearAll}>
                Clear all
            </button>

            <button onClick={clearFinished}>
                Clear finished
            </button>
        </div>
        </section>
    )
}

export default TodoList;