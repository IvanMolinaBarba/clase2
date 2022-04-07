import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import ItemCount from './ItemCount/ItemCount'
import Select from './Select/Select'

const options = [
  {value: 'rojo', text: 'Rojo'},
  {value: 'verde', text: 'Verde'},
  {value: 'azul', text: 'Azul'},
]


const ItemDetail = ({productDetail}) => {
  const {nombre, img, precio, desc} = productDetail

const navigate = useNavigate()

const handleNavigate = () => {
  navigate(-1)
}


const [cantidad,setCantidad] = useState(1)
const [color,setColor] = useState('rojo')

const agregarAlCarrito =  (cantidad) => {
  const itemToAdd = {
    id,
    nombre,
    precio,
    img,
    color,
    cantidad
  }

  console.log(itemToAdd)
}


  return (
    <div>
        <h2>{nombre} </h2>
        <img src={img} alt={nombre}/>
        <p>{desc}</p>
        <h4>Precio : ${precio}</h4>
        <small>Stock: {stock}</small>

        <Select
          options={options}
          onSelect={setColor}
        />

        <ItemCount
        max={stock}
        cantidad = {cantidad}
        setCantidad = {setCantidad}
        onAdd={agregarAlCarrito}
/>
        <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>

    </div>
  )


}

export default ItemDetail 