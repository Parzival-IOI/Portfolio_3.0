"use client"

import Link from 'next/link'
import { Close, HomeIcon, Menu } from './Icon'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({
  subsets : ['latin'],
  display : 'swap',
})

type NavName = {
  key: number
  name: string,
  path: string|any,
}

const name: NavName[] = [
  {
    key: 2,
    name : 'Projects', 
    path:'/Projects',
  },
  {
    key: 3, 
    name : 'About', 
    path:"/About",
  },
  {
    key: 4, 
    name : 'Contact', 
    path:"/Contact",
  }
]

const Navbar = () => {
  let pathname = usePathname() || '/';
  let isActive : boolean;
  const [sideBar, setSideBar] = useState(false)

  const openSideBar = ()=> {
    setSideBar((e)=>!e)
    if(sideBar) {

    }
  }

  return (
    <nav className={`${inter.className} w-full h-16 md:h-20 dark:bg-slate-700/50 bg-slate-400/60 flex items-center justify-between z-50 absolute`}>
      <div className=' h-full aspect-square rounded-full grid place-items-center '>
        <div className='p-2 md:p-3 aspect-square rounded-full grid place-items-center dark:hover:text-yellow-400 hover:border-2 dark:hover:border-yellow-300 hover:text-rose-600 hover:border-rose-500 transition-all duration-200'>
          {isActive = ("/" === pathname) ? true : false}
          <Link href={"/"} key="1" className={`md:p-2 aspect-square transition-all flex justify-center items-center md:hover:border-2 md:dark:hover:border-rose-600 md:hover:border-yellow-300 ${isActive ? `` : ``}`}>
            <HomeIcon/>
          </Link>
        </div>
      </div>
      <button type='button' onClick={()=>{openSideBar()}} className={`block sm:hidden mr-6 transition-all duration-500 ${sideBar ? `fixed right-0 z-50` : `` }`}>
        {!sideBar && <Menu/>}
        {sideBar && <Close/>}
      </button>
      {sideBar && <div className='fixed left-0 top-0 w-full h-full bg-slate-800/50 delay-200 transition-opacity duration-500 block sm:hidden' onClick={()=>{openSideBar()}}></div>}
      
      <div className={`fixed w-1/2 h-full top-0 bg-slate-800/95 transition-all duration-500  flex justify-center items-center flex-col gap-y-16 text-xl mr-6 lg:gap-6 font-bold sm:bg-transparent sm:flex-row sm:w-auto sm:relative sm:left-0 sm:text-base sm:gap-4 ${sideBar ? `left-1/2` : `left-full` }`}>
        {name.map((items)=>{
          isActive = (items.path === pathname) ? true : false;
          return (
            <Link onClick={()=>{openSideBar()}} href={{pathname: items.path}} key={items.key} className={`px-1 py-1 hover:dark:text-slate-300 hover:text-slate-800 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900  ${isActive ? `before:w-full` : `before:w-0 hover:before:w-full`}`}>{items.name}</Link>
        )})}
      </div>
    </nav>
  )
}

export default Navbar