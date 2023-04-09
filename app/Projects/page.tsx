import React from 'react'
import supabase from '@/utils/supabase'

export const revalidate = 3600;

type DataInfo = {
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
    const data = await supabase.from("CardProject").select("*");
  return (
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default page