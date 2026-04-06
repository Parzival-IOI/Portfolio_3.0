"use client"

import Link from 'next/link'
import { Close, MenuBar } from './Icon'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

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
  }

  return (
    <nav className='w-full h-14 z-50 fixed flex justify-center items-center bg-[#0a0a0a]/70 backdrop-blur-md border-b border-neutral-800/50'>
      <div className='w-full max-w-6xl mx-auto px-6 flex items-center justify-between'>
        <Link href="/" className='text-sm font-medium tracking-wide text-neutral-100 hover:text-white transition-colors'>
          Parzival
        </Link>
        <button type='button' onClick={()=>{openSideBar()}} className={`block sm:hidden transition-all duration-300 text-neutral-400 hover:text-white ${sideBar ? 'fixed right-6 z-50' : ''}`}>
          {!sideBar && <MenuBar/>}
          {sideBar && <Close/>}
        </button>
        {sideBar && <div className='fixed inset-0 bg-black/60 backdrop-blur-sm block sm:hidden z-40' onClick={()=>{openSideBar()}}></div>}
        
        <div className={`fixed w-3/5 max-w-[280px] h-full top-0 bg-[#0a0a0a] border-l border-neutral-800 transition-all duration-300 flex justify-center items-center flex-col gap-y-8 text-sm z-40 sm:bg-transparent sm:border-0 sm:flex-row sm:w-auto sm:relative sm:left-0 sm:gap-6 ${sideBar ? 'right-0' : '-right-full'}`}>
          {name.map((items, index)=>{
            isActive = (items.path === pathname) ? true : false;
            if(index == name.length-1) {
              return (
                <Menu key={index}>
                  <MenuButton className="text-neutral-400 hover:text-white transition-colors duration-200">{items.name}</MenuButton>
                  <MenuItems anchor="bottom" className='z-50 mt-2 flex flex-col bg-neutral-900 border border-neutral-800 rounded-md overflow-hidden min-w-[120px]'>
                    {others.map((link, index) => (
                      <MenuItem key={index}>
                        <Link href={link.path} className="block px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                          {link.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu> 
              )
            }
            return (
              <Link onClick={()=>{openSideBar()}} href={{pathname: items.path}} key={index} className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`}>{items.name}</Link>
          )})}
        </div>
      </div>
    </nav>
  )
}

export default Navbar