import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  useEffect(() => {
    updateCartTotals();
  }, [cart]);

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCartTotals = () => {
    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const newTotal = cart.reduce((acc, item) => acc + item.subTotal, 0);

    setTotalQuantity(newTotalQuantity);
    setTotal(newTotal);
  };

  const contextValue = {
    cart,
    totalQuantity,
    total,
    addItem,
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