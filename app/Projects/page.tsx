import React from 'react'
import supabase from '@/utils/supabase'
import Footer from '@/Components/Footer';
import Card from '@/Components/Card';
import {Pacifico} from 'next/font/google'

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const revalidate = 3600;

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

const page = async () => {
    const res = {data: []};
    const data = res.data;
    if(!data) {
      throw new Error('No data');
    }
    return (
      <div>
        <h1 className={`${font_style.className} w-full pt-24 text-4xl text-center font-bold underline underline-offset-4`}>Project</h1>
        <div className='w-full p-8 pt-16 md:16 flex justify-center items-center flex-wrap gap-10 md:gap-16 mb-16'>
          {data && data.map((item:DataInfo) => {
              return(
                <Card item={item} key={item.id}/>
              )
            })}
        </div>
        <Footer/>
      </div>
    )
}

export default page
