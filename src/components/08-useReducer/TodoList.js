import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
      
      <ul className='list-group list-group-flush'>
                    {
                        todos.map((todo, i) => {
                            return(
                             <TodoItem key={todo.id} todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle}/>
                            )
                    
                        })
                    }
        </ul>
    )
}

export default TodoList
