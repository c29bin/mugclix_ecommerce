'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const admin = 'mugclix-admin'
  const password = 'Astanamekgoku#23'

  const rouuter = useRouter()

  const [inputAdmin,setInputAdmin] = useState<string>('')
  const [inputPassword,setInputPassword] = useState<string>('')

  const handleLogIn = () => {
    if(inputAdmin == admin && inputPassword == password) {
      rouuter.push('/admin')
    }
    else {
      alert("log in failed")
      setInputAdmin('')
      setInputPassword('')
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col justify-center items-center w-screen'>
        <div className="flex flex-col justify-center items-center text-center mb-8 w-screen">
          <p>
            <span className="hello-text text-5xl md:text-10xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-500 text-transparent ">
              Hello
            </span>
            <span className="admin-text text-black text-4xl font-semibold italic">Admin</span>
          </p>
        </div>
        <form onSubmit={handleLogIn} className='flex flex-col justify-between items-start'>
          <label htmlFor='admin'>admin: </label>
          <input type='text' value={inputAdmin} onChange={(e)=> setInputAdmin(e.target.value)}/>
          <label htmlFor='password'>Password: </label>
          <input type='text' value={inputPassword} onChange={(e)=> setInputPassword(e.target.value)}/>
          <button type='submit'>Log-In</button>
        </form>
      </div>
    </main>
  )
}
