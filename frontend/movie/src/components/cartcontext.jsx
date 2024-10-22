
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (movie) => {
    const existingItem = cartItems.find((item) => item._id === movie._id);
    if (!existingItem) {
      setCartItems([...cartItems, movie]);
    }
  };


  const removeFromCart = (movieId) => {
    const updatedCart = cartItems.filter((item) => item._id !== movieId);
    setCartItems(updatedCart);
  };


  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
