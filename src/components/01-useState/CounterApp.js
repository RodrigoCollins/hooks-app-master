import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })






    return (
        <div>
            <h1>Counter1</h1>
            <h1>Counter2 </h1>

            <hr />
            <button className='btn btn-primary' onClick={() => setCounter({

            })}>

            </button>
            <button className='btn btn-primary' onClick={() => setCounter({


            })}>

            </button>
        </div>
    )
}

export default CounterApp
