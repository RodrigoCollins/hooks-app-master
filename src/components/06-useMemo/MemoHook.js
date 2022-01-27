import React, {useMemo, useState} from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../01-useState/counter.css'


const MemoHook = () => {

    const {counter, increment} = useCounter(1000)
    const [show, setShow] = useState(true)

   
     
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:{counter}</h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button
            className='btn btn-primary'
            onClick={increment}>
                +1
            </button>

            <button 
            className='btn btn-secondary ml-3'
            onClick={() => setShow(!show)}>
                show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHook
