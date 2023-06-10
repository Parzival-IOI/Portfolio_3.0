"use client"
import React from 'react'
import { Oswald } from 'next/font/google'
import Image from "next/image"
import img from "../app/Sea.png"
import Link from 'next/link'
import {LinkIcon} from './Icon'

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
    let path = "/Project/" + props.item?.id
  return (
    <Link href={{pathname: path}} key={props.key} className="flex justify-start items-center overflow-hidden flex-col min-w-sm w-64 h-80 max-w-lg bg-slate-400 rounded-t-xl rounded-b-md shadow-md shadow-slate-300 hover:shadow-lg hover:shadow-slate-300" >
        <Image src={img} alt="" width={1000} height={1000} className="w-full h-[45%] rounded-t-md" ></Image>
        <div className='flex justify-start items-start flex-col w-full h-[55%] p-1'>
            <div className='mx-3 py-1 px-2 rounded-lg bg-slate-800 text-slate-100 text-xs'>{props.item?.language}</div>
            <p className=" w-full text-md md:text-lg truncate h-[15%] overflow-hidden text-slate-700 px-3 font-semibold underline decoration-double" >{props.item?.name}</p>
            <p className='px-3 mt-2 indent-2 w-full h-[38%] text-sm text-ellipsis overflow-hidden break-words text-pink-800'>{props.item?.description}</p>
            <p className='px-3 mt-3 underline text-slate-700 text-sm font-simibold '>Date : {props.item?.date?.toString()}</p>
            {/* <div className="px-3 mt-3 flex justify-center items-center">
                <a href={props.item?.link} target='_blank' className="text-slate-600 flex justify-center items-center text-sm gap-2 hover:text-slate-800 transition">
                    <LinkIcon></LinkIcon> Click To Open Project
                </a>
            </div> */}
        </div>
    </Link>
  )
}

export default Card