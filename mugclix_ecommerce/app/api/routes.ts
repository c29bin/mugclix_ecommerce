// get all api

import { connectDB } from "@/lib/mongoDbConnection"
import { Cart } from "@/model/product"
import {NextResponse} from 'next/server'


export async function GET() {
    await connectDB()
    const products = await Cart.find()
    return NextResponse.json({products},{status: 200})
}