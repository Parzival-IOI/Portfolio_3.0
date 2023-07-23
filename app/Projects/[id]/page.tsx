import supabase from '@/utils/supabase'
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

// export const revalidate = 0;
interface DataInfo {
  id?: number,
  created_at?: Date,
  name?: string,
  language?: string,
  picture?: string,
  date?: Date,
  link?: string,
  description?: string,
}

interface Condition {
  id?: number,
}

export const revalidate = 3600;

export async function  generateStaticParams() {
    const {data}:{data:Condition[]|null} = await supabase.from("CardProject").select("id");
    return data ?? [];
}

const page = async ({ params : { id } } : {params : {id: string}}) => {
    const {data}:{data:DataInfo|null} = await supabase.from("CardProject").select("*").match({id}).single();

    if (data==null) {
        notFound();
    }
  return (
    <div className='pt-20 transition_once'>
      <h1 className={`${font_style.className} w-full my-4 text-4xl text-center font-bold underline underline-offset-4`}>{data.name}</h1>
      <section className='w-4/5 md:w-4/6 xl:w-1/2 mx-auto my-12 md:text-lg lg:text-xl'>
        <div className='px-4 my-4'>
          <Photo val={getPic(data.picture)}/>
        </div>
        <div className='indent-0 sm:indent-4 mt-6 flex flex-col sm:flex-row items-center gap-4'>
          Programming Languages :
          <div className='bg-slate-900/50 px-4 py-2 rounded-lg indent-0 hover:bg-blue-600 transition-colors duration-500' >{data.language}</div>
        </div>
        <div className='indent-4 my-4'>Create Data : {data.date?.toString()}</div>
        <div className='my-4 indent-4'>{data.description}</div>
        <a href={data.link} target='_blank' rel='noreferrer' className='my-2 flex justify-center items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-500'>
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

function getPic(name? : string | undefined) : number {
    
  let alpha:number;

  if(name == "c_cpp") alpha = 0;
  else if (name == "react") alpha = 1;
  else if (name == "php") alpha = 2;
  else if (name == "python") alpha = 3;
  else if (name == "micropython") alpha = 4;
  else if (name == "cs") alpha = 5;
  else if (name == "ino") alpha = 6;
  else if (name == "java") alpha = 7;
  else if (name == "hcj") alpha = 8;
  else alpha = 9;

  return alpha;
}

