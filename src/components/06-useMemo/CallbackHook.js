import React, { useState, useCallback } from 'react'
import '../01-useState/counter.css'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

    const [counter, setCounter] = useState(0)


   const increment = useCallback(
        (num) => {
        setCounter( prevState => prevState + num )
        },
        [setCounter],
    )

/*     useEffect(() => {
      DENTRO DEL USE EFFECT LA FUNCION SIN USECALLBACK SE MODIFICA
    }, [increment]) */

    return (
        <div>
            <h1>useCallback Hook : {counter}</h1>
            <hr />
            <ShowIncrement increment={increment}/>

        </div>
    )
}

export default CallbackHook
