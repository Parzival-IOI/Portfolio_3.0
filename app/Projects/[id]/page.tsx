import React from 'react'
import {notFound} from 'next/navigation';
import {LinkIcon } from '@/Components/Icon'
import Photo from '@/Components/Photo'
import {Pacifico} from 'next/font/google'
import Footer from '@/Components/Footer';
import { data } from '../page';

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const page = async ({ params : { id } } : {params : {id: string}}) => {

  const url = process.env.API! + "v1/api/project/findOne/" + id;

  const response = await fetch(url, {
    method: "GET",
    cache: 'no-store'
  });

  if(!response.ok || response.status === 500) {
    return notFound();
  }

  const project : data = await response.json();
  const created = new Date(project.created_at);


  return (
    <div className='pt-20 transition_once'>
      <h1 className={`${font_style.className} w-full my-4 text-4xl text-center font-bold underline underline-offset-4`}>{project.title}</h1>
      <section className='w-4/5 md:w-4/6 xl:w-1/2 mx-auto my-12 md:text-lg lg:text-xl'>
        <div className='px-4 my-4'>
          {
            project.image && 
            <Photo image={project.image} image_type={"image/jpeg"}></Photo>
          }
        </div>
        <div className='indent-0 sm:indent-4 mt-6 flex flex-col sm:flex-row items-center gap-2'>
          Programming Languages :
          {
            project.project_technology?.map(tech => {
              return (
                <div className='bg-blue-900/50 px-4 py-2 rounded-lg indent-0 hover:bg-blue-600 transition-colors duration-500' >
                  {tech.technology}
                </div>
              )
            })
          }
        </div>
        <div className='indent-4 my-4'>Create Date : {
              created.toLocaleDateString("en-US", { day: 'numeric' }) + "-" +
              created.toLocaleDateString("en-US", { month: 'short' }) + "-" +
              created.toLocaleDateString("en-US", { year: 'numeric' })
            }</div>
        <div className='my-4 indent-4'>{project.description}</div>
        <div className='my-4 indent-4 px-4'>{project.content}</div>
        <a href={project.link!} target='_blank' rel='noreferrer' className='my-2 flex justify-center items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-500'>
          <p>Click Here to Visit </p>
          <LinkIcon></LinkIcon>
        </a>
      </section>
      <section className='w-4/5 md:w-1/2 mx-auto'>
        <Footer/>
      </section>
    </div>
  )
}

export default page


