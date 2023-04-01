import React from 'react'
import Parallax from '@/Components/Parallax'
import Intro from '@/Components/Intro'

const page = () => {
  return (
    <div className='min-h-[120vh] '>
      <Parallax></Parallax>
      <Intro></Intro>
    </div>
  )
}

export default page