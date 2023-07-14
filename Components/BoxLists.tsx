"use client"
import React from 'react'
import { useInView } from "react-intersection-observer"

const BoxContainer = ({children,}: {children: React.ReactNode}) => {
  const {ref: _ref, inView: view} = useInView({
    triggerOnce : true,
    threshold : 0.5,
    rootMargin : "0px",
    delay : 500,
  })
  return (
    <>
      <div className="w-full h-0.5  animate-pulse bg-gradient-to-r from-cyan-500 to-blue-500  dark:from-purple-500 dark:to-pink-500 rounded-2xl m-0" ></div>
      <section className={`my-24 md:my-40 transition-all duration-2000 ${view ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`} ref={_ref} >
        <div className='p-0.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-purple-500 hover:to-pink-500 dark:from-purple-500 dark:to-pink-500 dark:hover:from-indigo-500 dark:hover:from-10% dark:hover:via-sky-500 dark:hover:via-30% dark:hover:to-emerald-500 dark:hover:to-90% transition-colors duration-1000 rounded-lg'>
          <div className='bg-[#023017] dark:bg-[#0f1b31] rounded-lg p-4'>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default BoxContainer