'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Category from '@/components/categoryModal'
import Image from 'next/image'
import {navigation} from '@/shared/navigation'
import Link from 'next/link'
import { UserButton, useAuth, useUser } from '@clerk/nextjs'
import { AppContext } from '@/app/context/isLoaded.context'
import { useContext, useEffect } from 'react'


const Header= () => {
    const {isSignedIn} = useUser()
    const navi = navigation[0]
    const {isLoaded}: any = useContext(AppContext)
    useEffect(()=>{console.log(isLoaded)},[isLoaded])
  return (
    <div className={`${isLoaded ? blur : ''} flex justify-around items-center p-3 border-b-2 border-slate-400 md:justify-between md:px-10`}>
      <Image src={'/logo.svg'}  width={35} height={50} alt='mugclix'/>
      <nav className='hidden md:flex justify-between items-center gap-20'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={'/about'} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navi.about}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={'/gallery'} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navi.gallery}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {navi.category}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink ><Category /></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      {isSignedIn ? <UserButton afterSignOutUrl='/' />: <Link href={'user'}>Sign-In</Link> }
    </div>
  )
}

export default Header
