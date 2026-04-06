'use client'
import React from 'react'
import { Arrow } from './Icon'
import { useInView } from 'react-intersection-observer'

const ScrollUp = () => {

    const {ref: _ref_, inView: _view} = useInView({
        threshold : 0.5,
        rootMargin : "0px",
        delay : 500,
    })

    const up = (e : React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className='absolute w-1 top-[50vh] right-8' ref={_ref_}></div>
            <button type='button' onClick={(e) => up(e)} className={`w-10 aspect-square rounded-full border border-neutral-700 flex justify-center items-center z-50 right-4 bottom-4 transition-opacity duration-500 fixed text-neutral-500 hover:text-white hover:border-neutral-500 ${_view ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Arrow/>
            </button>
        </>
    )
}

export default ScrollUp