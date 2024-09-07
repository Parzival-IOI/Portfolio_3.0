"use client"

import Link from 'next/link'
import { Close, HomeIcon, MenuBar } from './Icon'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const inter = Inter({
  subsets : ['latin'],
  display : 'swap',
})

type NavName = {
  name: string,
  path: string|any,
}

const name: NavName[] = [
  {
    name: 'Projects', 
    path: '/Projects',
  },
  {
    name: 'Contact', 
    path: '/Contact',
  },
  {
    name: 'Others',
    path: ''
  }
]

const others: NavName[] = [
  {
    name: 'Saving',
    path: '/Interest/Saving'
  },
  {
    name: 'Fixed',
    path: '/Interest/Fixed'
  }, 
  {
    name: 'Payroll',
    path: '/Temporary'
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
    <nav className={`${inter.className} w-full h-16 md:h-20 bg-slate-700/50 z-50 absolute flex justify-center items-center`}>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
        <div className=' h-full aspect-square rounded-full grid place-items-center '>
          <div className='p-2 md:p-3 aspect-square rounded-full grid place-items-center hover:text-slate-400'>
            {isActive = ("/" === pathname) ? true : false}
            <Link href={"/"} key="1" className={`p-2 aspect-square transition-all flex justify-center items-center ${isActive ? `` : ``}`}>
              <HomeIcon/>
            </Link>
          </div>
        </div>
        <button type='button' onClick={()=>{openSideBar()}} className={`block sm:hidden mr-6 transition-all duration-500 ${sideBar ? `fixed right-0 z-50` : `` }`}>
          {!sideBar && <MenuBar/>}
          {sideBar && <Close/>}
        </button>
        {sideBar && <div className='fixed left-0 top-0 w-full h-full bg-slate-800/50 delay-200 transition-opacity duration-500 block sm:hidden' onClick={()=>{openSideBar()}}></div>}
        
        <div className={`fixed w-1/2 h-full top-0 bg-slate-800/95 transition-all duration-500  flex justify-center items-center flex-col gap-y-16 text-xl mr-6 lg:gap-6 font-bold sm:bg-transparent sm:flex-row sm:w-auto sm:relative sm:left-0 sm:text-base sm:gap-4 ${sideBar ? `left-1/2` : `left-full` }`}>
          {name.map((items, index)=>{
            isActive = (items.path === pathname) ? true : false;
            if(index == name.length-1) {
              return (
                <Menu key={index}>
                  <MenuButton className="px-1 py-1 hover:text-slate-300 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:bg-white data-[active]:before:w-full before:w-0 hover:before:w-full">{items.name}</MenuButton>
                  <MenuItems anchor="bottom" className={`z-50 flex justify-center items-center flex-col gap-1 bg-indigo-800/20 rounded-md overflow-clip min-w-24`} >
                    {others.map((link, index) => (
                      <div key={index} className="block w-full z-50 hover:bg-indigo-700/90 text-center p-2 transition duration-500">
                        <MenuItem key={link.path} >
                          <Link href={link.path}>{link.name}</Link>
                        </MenuItem>
                      </div>
                      
                    ))}
                  </MenuItems>
                </Menu> 
              )
            }
            return (
              <Link onClick={()=>{openSideBar()}} href={{pathname: items.path}} key={index} className={`px-1 py-1 hover:text-slate-300 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:bg-white  ${isActive ? `before:w-full` : `before:w-0 hover:before:w-full`}`}>{items.name}</Link>
          )})}
        </div>
      </div>
    </nav>
  )
}

export default Navbar