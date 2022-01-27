import React, { useState } from 'react'
import './counter.css'


const ItemCount2 = () => {

    const [number, setNumber] = useState(0)

    const addNumbers = () => {
        setNumber(number + 3)
        setNumber(number - 4)
        setNumber(number + 2)
    }

    return (

        <div className='counter' >

            <h1>{number}</h1>

            <button onClick={addNumbers} >+</button>


        </div>
    )
}

export default ItemCount2
