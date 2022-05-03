import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';




const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (
        <Link to={"/cart"} className="cart-widget text-link">
        <ion-icon name="cart-sharp" color="light" size="large"></ion-icon> 
        
        <span>{cartQuantity() || ''}</span> 
        </Link>
       
    )
}

export default CartWidget



