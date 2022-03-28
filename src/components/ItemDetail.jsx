import React from 'react'

const ItemDetail = ({productDetail}) => {
    const {nombre, img, precio } = productDetail
  return (
    <div>
        <h2>Detalle del producto : {nombre} </h2>
        <img src={img} alt={nombre}/>
        <p>{precio}</p>
    </div>
  )
}

export default ItemDetail