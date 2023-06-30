"use client"

import Link from 'next/link'
import { HomeIcon } from './Icon'
import { usePathname } from 'next/navigation'
import { UrlObject } from 'url'

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

  return (
    <div className='w-full h-16 md:h-20 dark:bg-slate-700/50 bg-slate-400/60  flex items-center justify-between z-50 absolute'>
      <div className=' h-full aspect-square rounded-full grid place-items-center '>
        <div className='p-3 aspect-square rounded-full grid place-items-center dark:hover:text-yellow-400 hover:border-2 dark:hover:border-yellow-300 hover:text-rose-600 hover:border-rose-500 transition-all duration-200'>
          {isActive = ("/" === pathname) ? true : false}
          <Link href={"/"} key="1" className={`p-2 transition-all flex justify-center items-center hover:border-2 dark:hover:border-rose-600 hover:border-yellow-300 ${isActive ? `` : ``}`}>
            <HomeIcon/>
          </Link>
        </div>
      </div>
      <div className='flex gap-2 md:gap-4 lg:gap-6 mr-6 font-bold'>
        {name.map((items)=>{
          isActive = (items.path === pathname) ? true : false;
          return (
            <Link href={{pathname: items.path}} key={items.key} className={`px-1 py-1 hover:dark:text-slate-300 hover:text-slate-800 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900  ${isActive ? `before:w-full` : `before:w-0 hover:before:w-full`}`}>{items.name}</Link>
        )})}
      </div>
    </div>
  )
}

export default Navbar