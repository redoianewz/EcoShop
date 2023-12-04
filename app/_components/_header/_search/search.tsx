// search/page.jsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="bg-gray-100 text-black p-4 flex justify-between items-center h-20">
      {/* Left side: Logo */}
      <div>
        {/* Add your logo */}
        <span className="text-xl font-bold text-black">Logo</span>
      </div>

      {/* Center: Search input with icon */}
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-52 py-3 focus:outline-none focus:border-orange-700"
          />
          <span className="absolute right-2 top-2 text-gray-500">
            <button><FontAwesomeIcon icon={faSearch} className="text-2xl text-orange-700" /></button>
          </span>
        </div>
      </div>

      {/* Right side: Icons for user, cart, and wishlist */}
      <div className="flex items-center space-x-4">
        {/* Add your user icon */}
        <span>
          <FontAwesomeIcon icon={faUser} className="text-3xl text-black " />
          
        </span>
        {/* Add your cart icon with number */}
        <span className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            5 {/* Change this number dynamically based on your data */}
          </span>
        </span>
        {/* Add your wishlist icon with number */}
        <span className="relative">
          <FontAwesomeIcon icon={faHeart} className='text-3xl text-black' />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            3 {/* Change this number dynamically based on your data */}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Search;
