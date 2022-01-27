import React from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm'


const FormCustomHook = () => {

 const [values, handleInputChange] = useForm({
     name:'',
     email:'',
     password:''
 })

const {name, email, password} = values

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('values', values)
    
    
}
 



    return (
        <form onSubmit={handleSubmit}>
            <h1>Custom Form Hook</h1>
            <hr />

    
        <div className='form-group'>
            <input 
            type="text"
            name='name'
            className='form-control'
            placeholder='Tu Nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange} />
        </div>
        
        <div className='form-group'>
            <input 
            type="text"
            name='email'
            className='form-control'
            placeholder='user@email.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange} />
        </div>
        <div className='form-group'>
            <input 
            type="password"
            name='password'
            className='form-control'
            placeholder='******'
            value={password}
            onChange={handleInputChange} />
        </div>

        <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>

    )
}

export default FormCustomHook
