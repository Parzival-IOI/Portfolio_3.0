import React from 'react'
import supabase from '@/utils/supabase'
import { forEachChild } from 'typescript';

export const revalidate = 3600;

type DataInfo = {
  id?: number,
  created_at?: Date,
  name?: string,
  language?: string,
  picture?: string,
  date?: Date,
  link?: string,
  description?: string,
}

const page = async () => {
    const { data, error }:{ data:DataInfo[] | undefined | null, error:any} = await supabase.from("CardProject").select("*");
    console.log(data);
    return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default page
