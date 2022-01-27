import React, {useLayoutEffect, useRef} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'


const LayoutEffect = () => {
   
   const {counter, increment } = useCounter(0,100)

   const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

   const pTag = useRef()

   /* const {quote} = !!data & data[0] */
   
   useLayoutEffect(() => {

    console.log( pTag.current.getBoundingClientRect() )

   }, [data]) 

   

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
               {data?.map((q) => {
                   const {quote, author} = q
                   return(
                    <blockquote className='blockquote text-right'>
                        <p 
                        ref={pTag}
                        className='mb-10'>{ quote }</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                   )
               })}

           <button 
           className='btn btn-primary'
           onClick={increment}>
               Siguiente Quote
           </button>
            

        </div>
    )
}

export default LayoutEffect
