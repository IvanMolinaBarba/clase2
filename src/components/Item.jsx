import React from 'react'

const Item = (producto) => {
  return (
    <div className="card" style={{width:'18rem'}}>
  <img src={producto.img} className="card-img-top" alt={producto.nombre}/>
  <div className="card-body">
    <p className="card-text">{producto.precio}</p>
  </div>
</div>
  )
}

export default Item