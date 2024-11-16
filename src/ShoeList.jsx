import React from 'react';
import { useCart } from './contexts/CartContext'; 

function ShoeList() {
  const { addToCart } = useCart(); 

  const shoes = [
    { id: 1, name: `Dr. Scholl's Time Off Sneaker`, price: 50, image: 'https://m.media-amazon.com/images/I/61XOYhnXeOL._AC_SY575_.jpg' },
    { id: 2, name: `Adidas Run Falcon 5 Sneaker`, price: 80, image: 'https://m.media-amazon.com/images/I/71DZ2p2173L._AC_SX500_.jpg' },
    { id: 3, name: `Madden Girl Women's Giia Sneaker`, price: 30, image: 'https://m.media-amazon.com/images/I/71bw7OKxc6L._AC_SY575_.jpg' },
    { id: 4, name: `New Balance Men's DynaSoft Nitrel V5 GTX`, price: 60, image: 'https://m.media-amazon.com/images/I/71BF8bXujsL._AC_SX500_.jpg' },
    { id: 5, name: `PUMA Men's Pacer 23 Street Sneaker`, price: 56, image: 'https://m.media-amazon.com/images/I/81IaP54ZEBL._AC_SX500_.jpg' },
    { id: 6, name: `Reebok Unisex-Adult Smash Edge Sneaker`, price: 33, image: 'https://m.media-amazon.com/images/I/712sBUNBYdL._AC_SX500_.jpg' },
    { id: 7, name: `ANTLULU Sneakers Lace Up Casual Shoes`, price: 100, image: 'https://m.media-amazon.com/images/I/71fCVSoToLL._AC_SY575_.jpg' },
    { id: 8, name: `Dr. Scholl's Women's Time Off Sneaker`, price: 73, image: 'https://m.media-amazon.com/images/I/71ww4RI3aQL._AC_SY500_.jpg' },
  ];

  return (
    <div className="shoe-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6 p-4">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="w-full">
          <div className="w-full bg-white text-center p-4 rounded-lg shadow-lg hover:scale-105 duration-300">
            <img 
              className="object-contain h-48 w-full mx-auto mb-4 rounded-md" 
              src={shoe.image} 
              alt={shoe.name} 
            />
            <h3 className="text-md font-semibold text-gray-800 mb-2">{shoe.name}</h3>
            <p className="text-lg text-blue-600 font-semibold">${shoe.price}</p>
            <button 
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => addToCart(shoe)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;
