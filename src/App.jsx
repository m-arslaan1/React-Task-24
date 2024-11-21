import React from 'react';
import { CartProvider } from './contexts/CartContext';
import ShoeList from './ShoeList'; 
import Cart from './Cart';  
import Payment from './Payment';  
import './App.css';
import { useCart } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="store-container">
          <ShopOrPayment />  
        </div>
      </div>
    </CartProvider>
  );
}

function ShopOrPayment() {
  const {
    cart,
    showPayment,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    totalCost,
    handleProceedToPayment,
    handleBackToShop
  } = useCart();

  return (
    <>
      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        totalCost={totalCost}
        onProceedToPayment={handleProceedToPayment}
        onBackToShopping={handleBackToShop}
      />
      {!showPayment ? (
        <ShoeList addToCart={addToCart} />  
      ) : (
        <Payment totalCost={totalCost} />
      )}
    </>
  );
}

export default App;
