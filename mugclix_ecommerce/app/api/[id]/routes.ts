// get

import { connectDB } from "@/lib/mongoDbConnection"
import { Cart } from "@/model/product"
import {NextResponse} from 'next/server'



//Method for product pages
export async function GET({params}:{params:string}) {
    const {productId} = id
    await connectDB()
    const products = await Cart.find()
    return NextResponse.json({products},{status: 200})
}

//method for 