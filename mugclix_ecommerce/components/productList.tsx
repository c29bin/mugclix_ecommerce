'use client'

import { products } from '@/dummyData'
import ProductCard from './productCard'
import { useState } from 'react'


const ProductList = () => {
   const items = products
   const [scrollPosition, setScrollPosition] = useState(0);

   const handleScroll = (scrollOffset:any) => {
     const newPosition = scrollPosition + scrollOffset;
     setScrollPosition(newPosition < 0 ? 0 : newPosition);
   };

   const handleAddToCart = async() => {
      const res = await fetch()
   }
   //get all tyhe product
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {items.map((product) => (
          <div key={product.id} className="p-4">
            <ProductCard {...product} />
            {/* Add more product information */}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex gap-2 z-10">
        <button className="p-2 bg-gray-300 rounded-full shadow-md" onClick={() => handleScroll(-200)}>&lt;</button>
        <button className="p-2 bg-gray-300 rounded-full shadow-md" onClick={() => handleScroll(200)}>&gt;</button>
      </div>
    </div>
  )
}

export default ProductList
