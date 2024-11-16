import React from 'react';

function Header() {
  return (
    <div className="sticky top-0 z-10 shadow-md">
      <ul className="bg-blue-600 flex items-center justify-between text-white p-4 md:p-5">
        {/* Logo Section */}
        <li className="flex gap-6 text-md md:text-xl items-center space-x-3">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDYfzD7t97fu3z1YhWrlQgO6R_Hs6kNvlMA&s" 
            alt="Logo" 
            className="h-10 w-10 object-contain"
          />
          <a href="/" className="hover:underline transition-all duration-300">Home</a>
          <a href="#" className="hover:underline transition-all duration-300">Categories</a>
          <a href="#" className="hover:underline transition-all duration-300">About Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
