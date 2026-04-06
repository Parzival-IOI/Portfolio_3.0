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
    <div className='border border-neutral-800 rounded-lg p-4 flex flex-col gap-3 hover:border-neutral-600 transition-colors' key={props.items.key}>
        <div className='flex items-center gap-2 text-sm text-neutral-300'>
          {props.items.children}
          <span className='font-medium'>{props.items.name}</span>
        </div>
        {props.items.link == "" ?
            <p className='text-sm text-neutral-500'>{props.items.info}</p>
            :
            <a href={props.items.link} target='_blank' rel="noopener noreferrer" className='text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5'>
                {props.items.info}
                <LinkIcon/>
            </a>
        }
    </div>
  )
}

export default Contacting