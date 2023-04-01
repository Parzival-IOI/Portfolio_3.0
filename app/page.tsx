import React from 'react'
import Parallax from '@/Components/Parallax'
import Intro from '@/Components/Intro'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div className='min-h-[120vh] '>
      <Parallax></Parallax>
      <Intro></Intro>
      <Footer></Footer>
    </div>
  )
}

export default page