import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


type CardProps = {
    id: number;
    img: string;
    name:string;
    category: string;
    inkUse: string;
    price: number;
    inStock: boolean;
}

const ProductCard: React.FC<CardProps> = (props) => {
    const { img, name, category, inkUse, price, inStock } = props
  return (
    <Card className=' flex flex-col justify-between items-center bg-slate-200 w-60'>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='flex flex-col justify-between items-center text-center'>
                <Image className='mb-4 rounded-md' src={`/${img}`} width={200} height={80} alt='MM' />
                <h3>{category}</h3>
                <h2>{inkUse}-Ink</h2>
                <p><span>{price}</span> Pesos Each</p>
          
                <Link href={`/product/`}><Button className='mt-3'>Buy Now</Button></Link>
                <button type='button' className='bg-gray-500 hover:bg-gray-600 text-white text-xs font-semibold py-1 px-2 mt-2 rounded-lg shadow-md transition-colors'>
                    Add to Cart
                </button>

            </div>
        </CardContent>
        <CardFooter>
            <p>Design by Ginelle Cruz</p>
        </CardFooter>
    </Card>
  )
}

export default ProductCard
