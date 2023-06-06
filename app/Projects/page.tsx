import React from 'react'
import supabase from '@/utils/supabase'
import { forEachChild } from 'typescript';

export const revalidate = 3600;

interface DataInfo {
  id: number,
  created_at: Date,
  name: string,
  language: string,
  picture: string,
  date: Date,
  link: string,
  description: string,
}

const page = async () => {
    const { data} = await supabase.from("CardProject").select("*");

    return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default page
