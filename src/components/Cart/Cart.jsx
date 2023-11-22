//import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

import { useEffect, useContext, useState, createContext } from "react";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>There are no items in the cart</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {/* puede ser que esta desestructura de p.id etc esté mal probar con campo */}
            { cart.map( p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${parseFloat(total).toFixed(2)}</h3>
            <button onClick={() => clearCart()} className="Button">Clear Cart</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )
}

export default Cart