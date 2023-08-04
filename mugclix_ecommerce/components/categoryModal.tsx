import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const categoryModal = () => {
    const categories = ['anime','bible verse','couple','mother','father','teacher','customize','inspirational','statement','bulk-order','pokemon']
  return (
    <div className="grid grid-cols-4 gap-4 w-96 m-2">
      {categories.map((category) => (
        <div key={category} className="bg-gray-200 p-2 rounded-md text-center text-xs cursor-pointer hover:scale-110 transition-transform">
          <Link href={'/api/categgory/'}>{category}</Link>
        </div>
      ))}
    </div>
  )
}

export default categoryModal
