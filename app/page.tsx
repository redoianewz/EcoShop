'use client';
import React, { useState } from 'react';
import Sliders from './home/_slider/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const features = [
    { icon: 'feature-1.png', title: 'Free Shipping', description: 'on all orders', color: 'bg-blue-200', textColor: 'text-blue-800' },
    { icon: 'feature-2.png', title: 'Online Order', description: 'easy and fast', color: 'bg-green-200', textColor: 'text-green-800' },
    { icon: 'feature-3.png', title: 'Save Money', description: 'best deals', color: 'bg-yellow-200', textColor: 'text-yellow-800' },
    { icon: 'feature-4.png', title: 'Promotions', description: 'check out our offers', color: 'bg-purple-200', textColor: 'text-purple-800' },
    { icon: 'feature-5.png', title: 'Happy Sell', description: 'customer satisfaction', color: 'bg-pink-200', textColor: 'text-pink-800' },
    { icon: 'feature-6.png', title: '24/7 Support', description: 'contact us anytime', color: 'bg-orange-200', textColor: 'text-orange-800' },
  ];
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      category: 'Men\'s Apparel',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      imageSrc2: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      price: '$35',     
      sale: true,
      regular_price: '$50',
      rstatus: 'New',
      rating: 4.5,
    },
  ]
  const handleProductHover = (productId) => {
    setHoveredProduct(productId);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };
  return (
    <div>
      <Sliders />
      <div className="flex justify-around items-center py-8">
        {features.map((feature, index) => (
          <a
            key={index}
            className={`text-center ${feature.color} p-4 rounded-lg transition duration-300 hover:shadow-lg focus:outline-none`}
          >
            <img src={`/images/feature/${feature.icon}`} alt={feature.title} className="mx-auto mb-2" />
            <button className={`text-lg font-bold ${feature.textColor} transition duration-300 hover:${feature.textColor} hover:bg-gray-300`}>{feature.title}</button>
            <p>{feature.description}</p>
          </a>
        ))}
      </div>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white p-4 border border-gray-200 rounded-md shadow-md"
              onMouseEnter={() => handleProductHover(product.id)}
              onMouseLeave={handleProductLeave}
            >
              <p className="text-xl">{product.rstatus}</p> 
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={hoveredProduct === product.id ? product.imageSrc2 || product.imageSrc : product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between flex-col h-full">
                <div className="mb-2">
                  <span className="text-xs text-gray-500">{product.category}</span>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>                                                
                     <div className="flex items-end justify-between">
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        <p className="text-sm line-through text-gray-500">{product.regular_price}</p>
                      <div className="flex space-x-2">
                        <FontAwesomeIcon
                         icon={faCartShopping} 
                         className="text-orange-500 border bg-green-100 text-2xl border-green-400 rounded-full p-3 "                   
                        />
                        <FontAwesomeIcon
                         icon={faHeart}
                         className="text-orange-500 border bg-green-100 text-2xl border-green-400 rounded-full p-3 "
                          />                          
                     </div>                    
                </div>
                </div>                               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
   
  );
}
