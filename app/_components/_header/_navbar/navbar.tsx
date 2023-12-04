// navbar/page.jsx
'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showElectronics, setShowElectronics] = useState(false);
  const [showClothing, setShowClothing] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);


  let categoryTimeout;

  const handleCategoriesToggle = () => {
    setShowCategories(!showCategories);
  };

  const handleSubcategoryToggle = (subcategory, setShowSubcategory) => {
    clearTimeout(categoryTimeout);
    setShowSubcategory(!eval(`show${subcategory}`));
  };

  const handleCategoriesMouseEnter = () => {
    clearTimeout(categoryTimeout);
    setShowCategories(true);
  };

  const handleCategoriesMouseLeave = () => {
    categoryTimeout = setTimeout(() => {
      setShowCategories(false);
      setShowElectronics(false);
      setShowClothing(false);
    }, 100); // Adjust the delay time as needed
  };
  const handleProfileDropdownToggle = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleProfileMouseEnter = () => {
    clearTimeout(categoryTimeout);
    setShowProfileDropdown(true);
  };

  const handleProfileMouseLeave = () => {
    categoryTimeout = setTimeout(() => {
      setShowProfileDropdown(false);
    }, 100); // Adjust the delay time as needed
  };

  return (
    <nav className="bg-gray-100 text-black p-4 flex justify-between items-center h-20 text-xl font-mono">
      <ul className="flex space-x-12 mx-auto">
        <li
          className="relative group space-x-12"
          onMouseEnter={handleCategoriesMouseEnter}
          onMouseLeave={handleCategoriesMouseLeave}
        >
          <div className="flex items-center" onClick={handleCategoriesToggle}>
            <a href="#" className="mr-20 hover:text-orange-500">
            <FontAwesomeIcon icon={faList} />     Categories
              
            </a>
          </div>
          <ul className={`absolute ${showCategories ? 'block' : 'hidden'} mt-2 space-y-2 bg-white text-black p-4 rounded-md w-96`}>
            <li
              className="relative group"
              onMouseEnter={() => handleSubcategoryToggle('Electronics', setShowElectronics)}
              onMouseLeave={() => handleSubcategoryToggle('Electronics', setShowElectronics)}
            >
              <a href="#" className="block">
                + Electronics
              </a>
              <ul className={`absolute ${showElectronics ? 'block' : 'hidden'} mt-2 space-y-2 bg-white text-black p-2 rounded-md top-0 left-1/2 transform -translate-x-1/2`}>
                <li>              
                  <a href="#" className='hover:text-orange-500'>Laptops</a>
                </li>
                <li>
                  <a href="#" className='hover:text-orange-500'>Mobiles</a>
                </li>
              </ul>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => handleSubcategoryToggle('Clothing', setShowClothing)}
              onMouseLeave={() => handleSubcategoryToggle('Clothing', setShowClothing)}
            >
              <a href="#" className="block hover:text-orange-500">
                + Clothing
              </a>
              <ul className={`absolute ${showClothing ? 'block' : 'hidden'} mt-2 space-y-2 bg-white text-black p-2 rounded-md top-0 left-1/2 transform -translate-x-1/2 w-96`}>
                <li>
                  <a href="#"className='hover:text-orange-500'>Men's Clothing</a>
                </li>
                <li>
                  <a href="#" className='hover:text-orange-500'>Women's Clothing</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className='hover:text-orange-500'>Home</a>
        </li>
        <li>
          <a href="#" className='hover:text-orange-500'>Shop</a>
        </li>
        <li>
          <a href="#" className='hover:text-orange-500'>About</a>
        </li>
        <li>
          <a href="#" className='hover:text-orange-500'>Contact</a>
        </li>
        <li className="relative group" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
          <div className="flex items-center" onClick={handleProfileDropdownToggle}>
            <a href="#" className="mr-20 hover:text-orange-500">
              Profile
            </a>
          </div>
          <ul className={`absolute ${showProfileDropdown ? 'block' : 'hidden'} mt-2 space-y-2 bg-white text-black p-4 rounded-md w-96`}>
            <li>
              <a href="#" className='hover:text-orange-500'>Order</a>
            </li>
            <li>
              <a href="#"className='hover:text-orange-500'>Sitting</a>
            </li>
            <li>
              <a href="#" className='hover:text-orange-500'>Reset Password</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
