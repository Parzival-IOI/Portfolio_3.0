import React from 'react'
import {notFound} from 'next/navigation';
import {LinkIcon } from '@/Components/Icon'
import Photo from '@/Components/Photo'
import { data } from '../page';


const page = async ({ params } : {params : Promise<{id: string}>}) => {
  const { id } = await params;

  const url = process.env.API! + "v1/api/project/findOne/" + id;

  const response = await fetch(url, {
    method: "GET",
    cache: 'no-store'
  });

  if(!response.ok || response.status === 500) {
    return notFound();
  }

  const project : data = (await response.json()).data;
  const created = new Date(project.created_at);


  return (
    <div className='pt-20 max-w-2xl mx-auto px-6 transition_once'>
      <h1 className='my-6 text-2xl font-light tracking-tight text-center'>{project.title}</h1>
      <section className='space-y-6'>
        {
          project.image && 
          <div className='rounded-lg overflow-hidden border border-neutral-800'>
            <Photo image={project.image} image_type={"image/jpeg"} />
          </div>
        }
        <div className='flex flex-wrap items-center gap-2'>
          {
            project.project_technology?.map(tech => {
              return (
                <span key={tech.id} className='px-3 py-1 rounded text-xs text-neutral-400 border border-neutral-800'>
                  {tech.technology}
                </span>
              )
            })
          }
        </div>
        <p className='text-xs text-neutral-600'>{
          created.toLocaleDateString("en-US", { day: 'numeric' }) + " " +
          created.toLocaleDateString("en-US", { month: 'short' }) + " " +
          created.toLocaleDateString("en-US", { year: 'numeric' })
        }</p>
        <p className='text-sm text-neutral-300 leading-relaxed'>{project.description}</p>
        <p className='text-sm text-neutral-400 leading-relaxed'>{project.content}</p>
        <a href={project.link!} target='_blank' rel='noreferrer' className='inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors'>
          Visit project <LinkIcon />
        </a>
      </section>
    </div>
  )
}

export default page


