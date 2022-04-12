import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount/ItemCount'
import Select from './Select/Select'
import { Link } from 'react-router-dom';

const options = [
  {value: 'holo', text: 'Holo'},
  {value: 'damaged', text: 'Damaged'},
  {value: 'played', text: 'Played'},
]


const ItemDetail = ({productDetail}) => {
const {id ,stock , nombre, img, precio, category, desc} = productDetail
const { addItem , isInCart } = useContext (CartContext)


const navigate = useNavigate()

const handleNavigate = () => {
  navigate(-1)
}


const [cantidad,setCantidad] = useState(0)
const [color,setColor] = useState('holo')

const agregarAlCarrito = () => {
  const itemToAdd = {
    id,
    nombre,
    precio,
    img,
    color,
    cantidad
  }

  addItem(itemToAdd)
  cantidad > 0 && addItem(itemToAdd)
}


  return (
    <div>
        <h2>{nombre} </h2>
        <img src={img} alt={nombre}/>
        <p>{desc}</p>
        <h4>Precio : ${precio}</h4>
        <small>Stock: {stock}</small>
        { stock === 0 && <p style={{color: 'holo', fontWeight: '700'}}>¡Item sin stock!</p> }

        <Select
          options={options}
          onSelect={setColor}
    />


<>
      {
        !isInCart(id)
          ? <ItemCount
          max={stock}
          cantidad = {cantidad}
          setCantidad = {setCantidad}
          onAdd={agregarAlCarrito}
          />

        :  <Link to="/cart" className="btn btn-success d-block my-3">Terminar compra</Link>
      }
</>
      
        <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>

    </div>
  )


}

export default ItemDetail 