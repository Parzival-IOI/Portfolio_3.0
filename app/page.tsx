import React from 'react'
import Parallax from '@/Components/Parallax'
import Intro from '@/Components/Intro'
import Skill from '@/Components/Skill'

const page = () => {
  return (
    <div className='min-h-[120vh] text-[#7cc7d4] '>
      <Parallax></Parallax>
      <div className='bg-[#0f1b31]'>
        <div className='p-8 md:py-20 md:px-32 max-w-7xl mx-auto'>
          <Intro />
          <Skill />
        </div>
      </div>
    </div>
  )
}

export default page