import React from 'react'
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const Item = ( {id, nombre, precio, img, desc}) => {
    return (
        <Card style={{ width: '16rem', margin: '5px' }}>
            <Card.Img variant="top" src={img} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                
                <Link to={`/detail/${id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item