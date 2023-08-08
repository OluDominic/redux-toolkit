import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './todo.slice'

const Todo =()=> {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.tasks)

    const addNewTask =()=> {
        const task = inputRef.current.value.trim();
        if (task !== "") {
            dispatch(addTodo(task))
        }
    }

    const deleteTask =(id)=> {
        dispatch(deleteTodo(id))
    }

    console.log('Tasks: ',todo)

    return (
        <div>
            <h2>ToDo App</h2>
            <div>
                <input type={'text'} placeholder="Add task here..." 
                    ref={inputRef}
                />
                <button onClick={addNewTask}>Add task</button>
            </div>
            <div>
                <h3>Your tasks</h3>
                <ul>
                    {todo.map((task) => (
                        <li key={task.id}>
                            {task.text}
                            <button onClick={()=> deleteTask(task.id)}>
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;