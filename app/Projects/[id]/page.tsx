import supabase from '@/utils/supabase'
import React from 'react'
import {notFound} from 'next/navigation';
import {LinkIcon } from '@/Components/Icon'

// export const revalidate = 0;
interface DataInfo {
  id?: number,
  created_at?: Date,
  name?: string,
  language?: string,
  picture?: string,
  date?: Date,
  link?: string,
  description?: string,
}

interface Condition {
  id?: number,
}

export const revalidate = 3600;

export async function  generateStaticParams() {
    const {data}:{data:Condition[]|null} = await supabase.from("CardProject").select("id");
    return data ?? [];
}

const page = async ({ params : { id } } : {params : {id: string}}) => {
    const {data}:{data:DataInfo|null} = await supabase.from("CardProject").select("*").match({id}).single();

    if (data==null) {
        notFound();
    }
  return (
    <div className='pt-24 px-16 '>
      <div className='text-2xl my-8 indent-2 flex justify-center items-center'>{data.name}</div>
      <a href={data.link} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-2 text-slate-400 hover:text-slate-200'>
        <p>Click Here to Open Link </p>
        <LinkIcon></LinkIcon>
      </a>
    </div>
  )
}

export default page