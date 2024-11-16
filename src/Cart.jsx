import React from 'react';
import { useCart } from './contexts/CartContext'; 
import { Link, useLocation } from 'react-router-dom'; 

function Cart({ onProceedToPayment, onBackToShopping }) {
  const { cart, increaseQuantity, decreaseQuantity, totalCost } = useCart(); 
  const location = useLocation();

  const isPaymentPage = location.pathname === "/payment"; 

  return (
    <div className="cart relative overflow-hidden p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-center"><i>Your cart is empty</i></p>
      ) : (
        <ul className="flex flex-col gap-4 mb-5 overflow-auto h-2/3 mt-5">
          {cart.map((shoe) => (
            <li className="pb-3 pl-3 border-b-2 w-full flex flex-col sm:flex-row sm:gap-5 sm:items-center" key={shoe.id}>
              <img className="lg:w-[60px] lg:h-[40px] sm:w-[100px] sm:h-[70px] object-contain hover:scale-110 duration-300 mb-3 sm:mb-0" src={shoe.image} alt={shoe.name} />
              <div className="w-full">
                <span className="text-sm sm:text-base font-medium">{shoe.name}</span>
                <div className="flex justify-between sm:w-full mt-2 sm:mt-0">
                  <span className="text-sm font-semibold text-gray-700">${shoe.price}</span>
                  <div className="flex gap-2">
                    <button className="py-0 px-3 rounded-md bg-blue-600 hover:bg-blue-700" onClick={() => decreaseQuantity(shoe.id)}>-</button>
                    <span className="text-sm font-semibold">{shoe.quantity}</span>
                    <button className="py-0 px-3 rounded-md bg-blue-600 hover:bg-blue-700" onClick={() => increaseQuantity(shoe.id)}>+</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="sticky bottom-0 flex flex-col justify-center lg:items-center sm:items-start sm:flex-row sm:gap-5 border-t-2 pt-4 mt-5">
        <p className="text-center text-lg font-bold px-3 py-1 border-2 rounded-2xl text-blue-600 mb-4 sm:mb-0">Total: ${totalCost}</p>
        
        {isPaymentPage ? (
          <Link to="/">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300" onClick={onBackToShopping}>Go Back to Shopping</button>
          </Link>
        ) : (
          <Link to="/payment">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300" onClick={onProceedToPayment}>Proceed to Payment</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
