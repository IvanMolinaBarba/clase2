import React from 'react'
import { useNavigate } from "react-router-dom"

const ItemDetail = ({productDetail}) => {
    const {nombre, img, precio, desc} = productDetail

const navigate = useNavigate()

const handleNavigate = () => {
  navigate(-1)
}


  return (
    <div>
        <h2>Detalle del producto : {nombre} </h2>
        <img src={img} alt={nombre}/>
        <h4>Precio : {precio}</h4>
        <p>{desc}</p>

        <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>

    </div>
  )


}

export default ItemDetail