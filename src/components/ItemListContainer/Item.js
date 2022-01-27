import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {

    const { id, imagen, desc, name, precio, categoria } = prod

    return (
        <Card style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={imagen} style={{ minHeight: '150px' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                    <br />
                    categoria: {categoria}
                </Card.Text>
                <Card.Text>
                    $ {precio}
                </Card.Text>
                <Link to={`/detalle/${id}`}><Button variant="primary">Ver Detalle</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item
