import React from 'react'
import supabase from '@/utils/supabase'
import Footer from '@/Components/Footer';
import Card from '@/Components/Card';

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
    const { data, error }:{ data:DataInfo[] | undefined | null, error:any} = await supabase.from("CardProject").select("*");
    console.log(data);
    if(!data) {
      throw new Error('No data');
    }
    return (
    <div>
      <div className='w-full h-screen p-8 pt-32 md:16 flex justify-center items-center flex-wrap gap-10 md:gap-16'>
        {data && data.map((item:DataInfo) => {
            return(
              <Card item={item} key={item.id}/>
            )
          })}
        {/* <pre>
          {JSON.stringify(data, null, 2)}
        </pre> */}
        <Footer/>
      </div>
    </div>
  )
}

export default page
