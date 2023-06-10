import React from 'react'
import Image from 'next/image'
import Profile from '../Sea.png'

const page = () => {
  return (
    <div className='w-full bg-red-900'>
      <div className='pt-24 px-12 text-xl font-semibold flex justify-center items-center'>Little One's Story</div>
      <section>
        <Image src={Profile} alt="" width={100} height={100} className='rounded-full border-4 border-rose-600 width-30 aspect-square mx-auto mt-8'></Image>
        <div className='flex justify-center items-center px-8 '>My real name is Hor Kimhouy <br /> I'm currently a second year student at the RUPP </div>
      </section> 
    </div>
    )
}

export default page