'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter()
  const logOut  = () => {
    router.refresh()
    router.push('/')
  }
  return (
    <div>
      <p>Migclix Admin DashBoard</p>
      <button type='button' onClick={logOut}>Log-Out</button>
    </div>
  )
}

export default page
