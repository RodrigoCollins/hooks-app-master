import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'


const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(0)

    return (
        <div>
            <h1>Counter with Hook : {counter}</h1>
            <hr />
            <button className='btn btn-primary' onClick={() => increment()}>+</button>
            <button className='btn btn-secondary' onClick={reset}>Reset</button>
            <button className='btn btn-danger' onClick={() => decrement()}>-</button>
        </div>
    )
}

export default CounterCustomHook
