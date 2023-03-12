import React from 'react'
import supabase from '@/utils/supabase'

export const revalidate = 0;

const page = async () => {
    const {data} = await supabase.from("project").select();
  return (
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default page