import React from 'react'
import Parallax from '@/components/Parallax'
import Intro from '@/components/Intro'

const page = () => {
  return (
    <div className='min-h-[120vh] '>
      <Parallax></Parallax>
      <Intro></Intro>
    </div>
  )
}

export default page