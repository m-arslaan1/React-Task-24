// Root.js
import React from 'react';
import { CartProvider } from './contexts/CartContext';  // Import the Cart context provider
import Header from './Header';  // Your header component
import App from './App';

export default function Root() {
  return (
    <CartProvider>
      <Header />
      <App />   
    </CartProvider>
  );
}
