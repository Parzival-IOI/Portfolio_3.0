import React from 'react'
import Card from '@/Components/Card';

export type ProjectsResponse = {
  items: data[],
  column: number,
}

export type data = {
  id: number,
  title: string,
  type: string,
  description: string,
  content: string,
  link: string,
  image: string,
  created_at: string,
  updated_at: string,
  project_technology: technologies[]
}

export type technologies = {
  id: number,
  technology: string,
}



const page = async () => {
    
    const url = new URL(process.env.API + "v1/api/project/findAll");
    url.searchParams.append("orderBy", "DESC");
    url.searchParams.append("sortBy", "ID");
    url.searchParams.append("page", "0");
    url.searchParams.append("size", "100");

    const response = await fetch(url, {
      method: "GET",
      cache: 'no-store',
    })

    if(!response.ok) {
      throw new Error('No data');
    }

    const projects : ProjectsResponse = (await response.json()).data;

    return (
      <div className='max-w-4xl mx-auto px-6'>
        <h1 className='pt-24 pb-12 text-2xl font-light tracking-tight text-center'>Projects</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16'>
          {projects && projects.items.map((item: data) => {
              return(
                <Card item={item} key={item.id}/>
              )
            })}
        </div>
      </div>
    )
}

export default page
