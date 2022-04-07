import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const { cart} = useContext (CartContext)
    console.log(cart)

    return (
        <div className="container my-5">
            <h2>Compra</h2>
       </div>
    )
}

export default Cart