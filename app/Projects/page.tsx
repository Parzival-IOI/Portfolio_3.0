import React from 'react'
import Card from '@/Components/Card';
import {Pacifico} from 'next/font/google'

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
      <div className='max-w-6xl mx-auto'>
        <h1 className={`${font_style.className} w-full pt-24 text-4xl text-center font-bold underline underline-offset-4`}>Project</h1>
        <div className='w-full p-8 pt-16 md:16 flex justify-center items-center flex-wrap gap-10 md:gap-16 mb-16'>
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
