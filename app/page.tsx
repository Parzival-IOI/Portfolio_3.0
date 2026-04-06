import React from 'react'
import Parallax from '@/Components/Parallax'
import Intro from '@/Components/Intro'
import Skill from '@/Components/Skill'

const page = () => {
  return (
    <div className='bg-[#0a0a0a]'>
      <Parallax />
      <div className='relative z-10 bg-[#0a0a0a] border-t border-neutral-800/50'>
        <div className='px-6 py-16 md:py-24 max-w-3xl mx-auto'>
          <Intro />
          <Skill />
        </div>
      </div>
    </div>
  )
}

export default page