import React from 'react'
import Parallax from '@/Components/Parallax'
import Intro from '@/Components/Intro'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div className='min-h-[120vh] '>
      <Parallax></Parallax>
      <div className='p-8 md:py-20 md:px-32 bg-[#023017] dark:bg-[#0f1b31]'>
        <Intro></Intro>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page