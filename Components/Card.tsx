// "use client"
import React from 'react'
import { Oswald } from 'next/font/google'
import Link from 'next/link'
import { revalidate } from '@/app/Projects/page'
import Photo from './Photo'

interface Props {
    item? : {
        id?: number,
        created_at?: Date,
        name?: string,
        language?: string,
        picture?: string,
        date?: Date,
        link?: string,
        description?: string,
    } | undefined | null,
    key? : number | undefined | null,
}

const Card : React.FC<Props> = (props) => {
    let path = "/Projects/" + props.item?.id
  return (
    <Link href={{pathname: path}} key={props.key} className='flex justify-start items-center overflow-hidden flex-col min-w-[14rem] w-[90%] sm:w-auto h-[23rem] sm:h-96 max-w-[20rem] bg-slate-400 rounded-t-sm rounded-b-3xl shadow-md shadow-slate-400  hover:shadow-slate-200 transition-all group' >
        <Photo val={getPic(props.item?.picture)}></Photo>
        <div className='flex justify-start items-start flex-col w-full h-[55%] p-1'>
            <div className='mx-3 py-1 px-2 sm:mt-3 sm:mb-2 mt-2 mb-1 rounded-lg bg-slate-800 text-slate-100 text-xs'>{props.item?.language}</div>
            <p className=' w-full text-md md:text-lg truncate h-[15%] overflow-hidden text-slate-700 px-3 font-semibold underline decoration-double' >{props.item?.name}</p>
            <p className={`${'px-3 mt-2 indent-2 w-full h-[33%]  sm:h-[40%] text-sm text-ellipsis overflow-hidden break-words '} ${textChanges[getPic(props.item?.picture)]}`}>{props.item?.description}</p>
            <p className='px-5  mt-2 underline text-slate-700 text-sm font-simibold '>Date : {props.item?.date?.toString()}</p>
        </div>
    </Link>
  )
}

export default Card

const textChanges : string[] = [
    "text-fuchsia-900",
    "text-green-800",
    "text-yellow-700",
    "text-gray-800",
    "text-indigo-800",
    "text-purple-800",
    "text-orange-700",
    "text-violet-600",
    "text-emerald-700",
    "text-rose-600",
]

function getPic(name? : string | undefined) : number {
    
    let alpha:number;
  
    if(name == "c_cpp") alpha = 0;
    else if (name == "react") alpha = 1;
    else if (name == "php") alpha = 2;
    else if (name == "python") alpha = 3;
    else if (name == "micropython") alpha = 4;
    else if (name == "cs") alpha = 5;
    else if (name == "ino") alpha = 6;
    else if (name == "java") alpha = 7;
    else if (name == "hcj") alpha = 8;
    else alpha = 9;
  
    return alpha;
  }