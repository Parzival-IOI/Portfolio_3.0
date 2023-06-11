import supabase from '@/utils/supabase'
import React from 'react'
import {notFound} from 'next/navigation';

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
    <div>
      {data.name}
    </div>
  )
}

export default page