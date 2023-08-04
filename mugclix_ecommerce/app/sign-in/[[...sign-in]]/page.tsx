

import { SignIn } from "@clerk/nextjs";

export default  async function Page({params}:{params:string}) { 
  const id = params
  return <div className='flex justify-center items-center p-5 '>
      <SignIn  />
    </div>;
}