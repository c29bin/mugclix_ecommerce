import ProductList from "@/components/productList"
import { UserButton } from "@clerk/nextjs"

const page = () => {
  return (
    <div className='w-full h-screen'>
      <ProductList />
    </div>
  )
}

export default page
