import React, { FC } from 'react'
import { LinkIcon } from './Icon'

interface props {
    
    items : {
        key : number,
        name : string,
        info : string,
        link : string,
        children : React.ReactNode, 
    }
}

const Contacting:FC<props> = (props) => {
  return (
    <div className='w-full bg-slate-900/50 aspect-[6/2] sm:aspect-[4/1] rounded-lg flex flex-col' key={props.items.key}>
        <h1 className=' w-full pt-4 pb-2 md:text-lg lg:text-xl font-bold flex flex-row justify-center items-center gap-3'>{props.items.children} {props.items.name}</h1>
        <div className='w-4/5 mx-auto h-1 rounded-lg bg-white'></div>
        {props.items.link == "" ?
            <p className='w-4/5 mx-auto h-full md:text-lg lg:text-xl flex justify-center items-center gap-2 sm:gap-4'>
                {props.items.info}
            </p>
            :
            <a href={props.items.link} target='_blank' rel="noopener noreferrer" className='w-4/5 mx-auto h-full p-0 sm:p-2 mb-2 md:mb-4 xl:mb-8 md:text-lg lg:text-xl flex justify-center items-center gap-2 sm:gap-4 hover:bg-blue-600/50 transition-colors duration-500 rounded-b-2xl'>
                {props.items.info}
                <LinkIcon/>
            </a>
        }
    </div>
  )
}

export default Contacting