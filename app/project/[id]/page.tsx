import supabase from '@/utils/supabase'
import React from 'react'
import {notFound} from 'next/navigation';

// export const revalidate = 0;

export async function  generateStaticParams() {
    const {data : projects } = await supabase.from("project").select("id");
    return projects ?? [];
}

const page = async ({ params : { id } } : {params : {id: string}}) => {
    const {data : project} = await supabase.from("project").select().match({id}).single();

    if (!project) {
        notFound();
    }
  return (
    <pre>
        {JSON.stringify(project, null, 2)}
    </pre>
  )
}

export default page