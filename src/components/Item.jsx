import React from 'react'
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const Item = ( {producto}) => {
    return (
        <Card style={{ width: '18rem', margin: '5px' }}>
            <Card.Img variant="top" src={producto.img} alt={producto.nombre}/>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
              
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                
                <Link to={`/detail/${producto.id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item