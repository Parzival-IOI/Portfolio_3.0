import React, { FC } from 'react'
import Percentage from './Percentage'

interface list {
    key : number,
    name : string,
    percentage : string,
}

interface props {
    title : string,
    lists : list[],
}

const Chart:FC<props> = (props) => {
  return (
    <section className='w-5/6 sm:w-4/6 md:w-3/5 max-w-4xl mx-auto my-16 h-auto bg-slate-900/50 rounded-2xl'>
        <div className='md:text-lg lg:text-xl md:px-8 py-2 '>
            <div className='underline underline-offset-4 decoration-2 font-bold mb-2'>{props.title}</div> 
            {props.lists.map( (item) => {
                return(
                    <Percentage item={item} />
                )
            })}
        </div>
    </section>
  )
}

export default Chart