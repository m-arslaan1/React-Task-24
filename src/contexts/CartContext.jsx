import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);  

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingShoe = prevCart.find((item) => item.id === shoe.id);
      if (existingShoe) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...existingShoe, quantity: existingShoe.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  const increaseQuantity = (shoeId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (shoeId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === shoeId
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        )
        .filter((item) => item.quantity > 0); 
    });
  };

  const totalCost = cart.reduce((total, shoe) => total + shoe.price * shoe.quantity, 0);

  const handleProceedToPayment = () => setShowPayment(true);

  const handleBackToShop = () => setShowPayment(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        showPayment,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalCost,
        handleProceedToPayment,
        handleBackToShop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
