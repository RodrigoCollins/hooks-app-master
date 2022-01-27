import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const MultipleCustomHooks = () => {
   
   const {counter, increment } = useCounter(0,100)

   const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

   

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            { loading ?
            (
             <div className='alert alert-info text-center'>Loading...</div>
            )
            :
           (
               data.map((q) => {
                   const {quote, author} = q
                   return(
                    <blockquote className='blockquote text-right'>
                        <p className='mb-10'>{ quote }</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                   )
               })


           )}

           <button 
           className='btn btn-primary'
           onClick={increment}>
               Siguiente Quote
           </button>
            

        </div>
    )
}

export default MultipleCustomHooks
