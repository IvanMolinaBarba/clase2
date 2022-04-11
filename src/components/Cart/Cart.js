import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

    const { cart ,cartTotal , emptyCart, removeItem}  = useContext (CartContext)
        

    return (
        <div className="container my-5">
            <h2>Tu Compra</h2>
            <hr/>

            {
            cart.map((item) =>(
                <div key={item.id}>
                <h4>{item.nombre}</h4>   
                <p>Cantidad : {item.cantidad}</p> 
                <h5>Precio: $ {item.precio * item.cantidad} </h5>
                <button 
                className="btn btn-danger"
                onClick={() => removeItem (item.id)}
                >
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
            ))
            
        }

        <h3>TOTAL: ${cartTotal()}</h3>
        <hr/>
        <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>

       </div>
    )
}

export default Cart