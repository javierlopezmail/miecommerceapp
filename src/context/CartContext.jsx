import React from "react";
//import { createContext, useState } from 'react'

import { useEffect, useContext, useState, createContext } from "react";

//  export const CartContext = createContext({
//      cart: []
//  })

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    console.log(cart)

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addItem = (item, quantity) => {
        console.log("Add CART")
        if (!isInCart(item.id)) {
            console.log("Item Id" + item.id)
            setCart(prev => [...prev, {...item, quantity}])
            // setTotal(calculateTotal())
            // setTotalQuantity(calculateTotalQuantity())
        }else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        // setTotal(calculateTotal())
        // setTotalQuantity(calculateTotalQuantity())
    }

    const clearCart = () => {
        setCart([])
        // setTotal(calculateTotal())
        // setTotalQuantity(calculateTotalQuantity())
    }

    const calculateTotal = () => {
        if (!cart.length) {
            return 0; 
        }
        return cart.reduce((acc, item) => acc + item.price * item.quantity)
    }

    const calculateTotalQuantity = () => {
        if (!cart.length) {
            return 0; 
        }
        return cart.reduce((acc, item) => acc + item.quantity)
    }

    useEffect(() => {
        // Update total and totalQuantity after cart changes
        setTotal(calculateTotal());
        setTotalQuantity(calculateTotalQuantity());
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}