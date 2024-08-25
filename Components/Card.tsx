import React from 'react'
import Link from 'next/link'
import Photo from './Photo'
import { data } from '@/app/Projects/page'


const Card  = (props: {item: data}) => {
  let path = "/Projects/" + props.item.id
  const created = new Date(props.item.created_at);
  return (
    <Link href={{pathname: path}} key={props.item.id} className='flex justify-start items-center overflow-hidden flex-col min-w-[18rem] w-[90%] sm:w-auto h-[23rem] sm:h-96 max-w-[20rem] bg-slate-900 shadow-slate-800 rounded-sm shadow-md transition-all group' >
        <Photo image={props.item.image} image_type={"image/jpeg"}></Photo>
        <hr className='w-full h-[0.5px] bg-slate-50 mt-auto' />
        <div className='flex justify-start items-start flex-col w-full h-[55%] p-1'>
            <div className='flex justify-start items-center gap-x-0.5 '>
              {
                props.item.project_technology?.map(tech => {
                  return (
                    <div className='first:ml-3 py-1 px-2 sm:mt-3 sm:mb-2 mt-2 mb-1 rounded-lg bg-slate-800 text-xs'>
                      {tech.technology}
                    </div>
                  )
                })
              }
            </div>
            <p className='px-3 w-full text-md md:text-lg truncate h-[15%] overflow-hiddenpx-3 font-semibold underline decoration-2' >{props.item.title}</p>
            <p className={`${'px-3 mt-2 indent-2 w-full h-[33%]  sm:h-[40%] text-sm text-ellipsis overflow-hidden break-words '}`}>{props.item.description}</p>
            <p className='px-5 mt-2 underline text-sm font-simibold '>Date : {
              created.toLocaleDateString("en-US", { day: 'numeric' }) + "-" +
              created.toLocaleDateString("en-US", { month: 'short' }) + "-" +
              created.toLocaleDateString("en-US", { year: 'numeric' })
            }</p>
        </div>
    </Link>
  )
}

export default Card
