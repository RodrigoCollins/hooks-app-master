import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const { x, y } = coords

    useEffect(() => {
        console.log('componente montado')
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }
            setCoords(coords)
        }

        window.addEventListener('mousemove', mouseMove)
        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h1>Buenas Buenas</h1>
            <h2>Coordenadas Mouse X: {x}</h2>
            <h2>Coordenadas Mouse Y: {y}</h2>
        </div>
    )
}

export default Message
