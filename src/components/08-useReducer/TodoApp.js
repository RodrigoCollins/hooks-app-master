import React, { useReducer, useEffect } from 'react'
import {todoReducer} from './todoReducer'
import './reducer.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const init = () => {
/*     return [{
    id:new Date().getTime(),
    desc:'Aprender React',
    done: false
}] */
return JSON.parse(localStorage.getItem('todos')) || []
}
const TodoApp = () => {

const [ todos, dispatch ] = useReducer(todoReducer,[], init)



useEffect(() => {
localStorage.setItem('todos', JSON.stringify( todos ))
}, [todos])

const handleDelete = (todoId) => {
    const action = {
        type:'delete',
        payload: todoId
    }
    dispatch(action)
}

const handleToggle = (todoId) =>{
    dispatch({
        type: 'toggle',
        payload: todoId
    })
}

const handleAddTodo = (newTodo) => {
    dispatch({
        type:'add',
        payload: newTodo
    })

}



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
        <div className='row'>
            <div className='col-7'>
            <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/> 
            </div>
            <div className='col-5'>
            <TodoForm handleAddTodo={handleAddTodo} />
            </div>
        </div>
            
        </div>
    )
}

export default TodoApp
