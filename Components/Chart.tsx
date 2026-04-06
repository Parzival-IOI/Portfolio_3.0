'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Chart = ({children}:{children : React.ReactNode}) => {
    const {ref: _ref, inView: view} = useInView({
        triggerOnce : true,
        threshold : 0.5,
        rootMargin : "0px",
        delay : 300,
    })
  return (
    <section className={`mx-auto my-12 h-auto border border-neutral-800 rounded-lg p-4 transition-all duration-700 ease-out ${view ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} ref={_ref}>
        {children}
    </section>
  )
}

export default Chart