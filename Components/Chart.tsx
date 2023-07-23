'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Chart = ({children}:{children : React.ReactNode}) => {
    const {ref: _ref, inView: view} = useInView({
        triggerOnce : true,
        threshold : 0.5,
        rootMargin : "0px",
        delay : 500,
    })
  return (
    <section className={`w-5/6 sm:w-4/6 md:w-3/5 max-w-4xl mx-auto my-16 h-auto bg-slate-900/50 rounded-2xl  transition-all duration-2000 ease-out ${view ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`} ref={_ref}>
        {children}
    </section>
  )
}

export default Chart