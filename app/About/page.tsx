import React from 'react'
import Image from 'next/image'
import Profile from '../Sea.png'

const page = () => {
  return (
    <div className='w-full bg-red-900'>
      <div className='pt-24 px-12 text-xl font-semibold flex justify-center items-center'>Little One's Story</div>
      <section>
        <Image src={Profile} alt="" width={100} height={100} className='rounded-full border-4 border-rose-600 width-30 aspect-square mx-auto mt-8'></Image>
        <div className='indent-4 px-12 my-8'>
          My Name is HorKimHouy. I am a student at Univerity of PhnomPenh. I live at khan ChroyChongVa which is very far from my home, I have to drive to school everyday. For about 2 years, I have done many Projects.
        </div>
      </section>
    </div>
    )
}

export default page