import React from 'react'
import { useForm } from '../../hooks/useForm'


const TodoForm = ({handleAddTodo}) => {
    
const [{description}, handleInputChange, reset] = useForm({
    description:''
})
const handleSubmit = (e) => {
    e.preventDefault()

    if(description.trim().length <= 1 ){
        return
        
    }
    const newTodo = {
            id:new Date().getTime(),
            desc: description,
            done: false
    }

    handleAddTodo(newTodo)
    reset()
}
    return (
        <>
                <h4>Agregar TODO</h4>
               <hr />
               <form onSubmit={handleSubmit}>
                   <input 
                   type="text" 
                   name='description' 
                   placeholder='ingrese todo'
                   onChange={handleInputChange}
                   value={description} />
                   <button 
                   type='submit'
                   className='btn btn-outline-primary mt-1 btn-block'>
                       Agregar
                   </button>
               </form>
               </>
    )
}

export default TodoForm
