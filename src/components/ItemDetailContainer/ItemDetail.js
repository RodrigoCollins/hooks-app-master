import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../01-useState/ItemCount'

const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true)

    const { imagen, desc, name, precio, categoria, stock } = product

    const onAdd = (contador) => {
        console.log({ ...product, cantidad: contador })
        setShow(false)
        alert(`compraste: ${contador} articulos`)
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src={imagen} style={{ minHeight: '300px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                        categoria:{categoria}
                    </Card.Text>
                    <Card.Text>
                        {precio}
                    </Card.Text>
                </Card.Body>
            </Card>

            {show ? <ItemCount stock={stock} onAdd={onAdd} /> :
                <div>
                    <Link to='/cart'><button>Terminar la Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>}

        </div>

    )
}

export default ItemDetail
