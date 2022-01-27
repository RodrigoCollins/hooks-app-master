import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Real Example Ref</h1>
             <hr />
            {show && <MultipleCustomHooks/>}
            <button onClick={() => setShow(!show)}>
                Show/Hide
            </button>

        </div>
    )
}

export default RealExampleRef
