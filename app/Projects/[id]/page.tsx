import React from 'react'
import {notFound} from 'next/navigation';
import {LinkIcon } from '@/Components/Icon'
import Photo from '@/Components/Photo'
import {Pacifico} from 'next/font/google'
import Footer from '@/Components/Footer';

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export type Project = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    title: string;
    content: string;
    link: string | null,
    typeId: number;
    imageId: number | null;
}

const page = async ({ params : { id } } : {params : {id: string}}) => {
    const res = await fetch(process.env.API!, {
      method: "GET",
    });

    const data: Project = await res.json();

    if (data === null || data === undefined) {
        notFound();
    }
  return (
    <div className='pt-20 transition_once'>
      <h1 className={`${font_style.className} w-full my-4 text-4xl text-center font-bold underline underline-offset-4`}>{data.title}</h1>
      <section className='w-4/5 md:w-4/6 xl:w-1/2 mx-auto my-12 md:text-lg lg:text-xl'>
        <div className='px-4 my-4'>
          {/* <Photo val={getPic(data.picture)}/> */}
        </div>
        <div className='indent-0 sm:indent-4 mt-6 flex flex-col sm:flex-row items-center gap-4'>
          Programming Languages :
          {/* <div className='bg-slate-900/50 px-4 py-2 rounded-lg indent-0 hover:bg-blue-600 transition-colors duration-500' >{data.language}</div> */}
        </div>
        <div className='indent-4 my-4'>Create Data : {data.createdAt?.toString()}</div>
        <div className='my-4 indent-4'>{data.description}</div>
        <a href={data.link!} target='_blank' rel='noreferrer' className='my-2 flex justify-center items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-500'>
          <p>Click Here to Open Link </p>
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


