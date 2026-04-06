import React from 'react'
import Link from 'next/link'
import Photo from './Photo'
import { data } from '@/app/Projects/page'


const Card  = (props: {item: data}) => {
  let path = "/Projects/" + props.item.id
  const created = new Date(props.item.created_at);
  return (
    <Link href={{pathname: path}} key={props.item.id} className='group flex flex-col w-full max-w-sm border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-600 transition-colors'>
        <Photo image={props.item.image} image_type={"image/jpeg"} />
        <div className='flex flex-col gap-2 p-4'>
            <div className='flex flex-wrap gap-1.5'>
              {
                props.item.project_technology?.map(tech => {
                  return (
                    <span key={tech.id} className='px-2 py-0.5 rounded text-xs text-neutral-400 bg-neutral-800/80'>
                      {tech.technology}
                    </span>
                  )
                })
              }
            </div>
            <h3 className='text-sm font-medium text-white truncate'>{props.item.title}</h3>
            <p className='text-xs text-neutral-500 line-clamp-2'>{props.item.description}</p>
            <p className='text-xs text-neutral-600'>{
              created.toLocaleDateString("en-US", { day: 'numeric' }) + " " +
              created.toLocaleDateString("en-US", { month: 'short' }) + " " +
              created.toLocaleDateString("en-US", { year: 'numeric' })
            }</p>
        </div>
    </Link>
  )
}

export default Card
