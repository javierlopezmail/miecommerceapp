// import React from "react";
// //import { createContext, useState } from 'react'

// import { useEffect, useContext, useState, createContext } from "react";

// //  export const CartContext = createContext({
// //      cart: []
// //  })

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])
//     const [totalQuantity, setTotalQuantity] = useState(0);
//     const [total, setTotal] = useState(0);

//     console.log(cart)

//     const isInCart = (id) => {
//         return cart.some(item => item.id === id)
//     }

//     const addItem = (item, quantity) => {
//         console.log("Add CART")
//         if (!isInCart(item.id)) {
//             console.log("Item Id" + item.id)

//             console.log("El carrito antes del ADD: " + cart)

//             setCart(prev => [...prev, {...item, quantity}])
            
//             console.log("El carrito despues del ADD: " + cart)
//             // setTotal(calculateTotal())
//             // setTotalQuantity(calculateTotalQuantity())
//         }else{
//             console.error("El producto ya fue agregado")
//         }
//     }

//     const removeItem = (itemId) => {
//         const cartUpdated = cart.filter(prod => prod.id !== itemId)
//         setCart(cartUpdated)
//         // setTotal(calculateTotal())
//         // setTotalQuantity(calculateTotalQuantity())
//     }

//     const clearCart = () => {
//         setCart([])
//         // setTotal(calculateTotal())
//         // setTotalQuantity(calculateTotalQuantity())
//     }

//     const calculateTotal = () => {
//         if (!cart.length) {
//             return 0; 
//         }
//         return cart.reduce((acc, item) => acc + item.price * item.quantity)
//     }

//     const calculateTotalQuantity = () => {
//         if (!cart.length) {
//             return 0; 
//         }
//         return cart.reduce((acc, item) => acc + item.quantity)
//     }

//     useEffect(() => {
//         // Update total and totalQuantity after cart changes
//         setTotal(calculateTotal());
//         setTotalQuantity(calculateTotalQuantity());
//     }, [cart]);

//     return (
//         <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity }}>
//             { children }
//         </CartContext.Provider>
//     )
// }

import React, { createContext, useContext, useState, useEffect } from 'react';
import { logObject } from '../Log/LogObject'
import { logArray } from '../Log/LogArray'

// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // Function to add an item to the cart
  const addItem = (item) => {
    // console.log("Added item: ")
    // logObject(item)
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      //console.log("1")

      if (existingItem) {
        //console.log("B")
        // If the item already exists, update its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        //console.log("A")

        // If the item doesn't exist, add it to the cart
        return [...prevCart, item];
      }
    });

    //updateCartTotals();

    // console.log("After cart: ")
    // logArray(cart)

  };

  useEffect(() => {
    // Log the updated cart state
    console.log('Updated Cart:');
    logArray(cart);

    // Update total and totalQuantity after cart changes
    updateCartTotals();
  }, [cart]);

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    //updateCartTotals();
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]);
    //updateCartTotals();
  };

//   const updateItemQuantity = (itemId, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

  // Helper function to update total and totalQuantity
  const updateCartTotals = () => {
    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const newTotal = cart.reduce((acc, item) => acc + item.subTotal, 0);

    setTotalQuantity(newTotalQuantity);
    setTotal(newTotal);
  };

  // Value to be provided by the context
  const contextValue = {
    cart,
    totalQuantity,
    total,
    addItem,
    //updateItemQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

// Custom hook to use the CartContext
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
  
  export { CartProvider, useCart };