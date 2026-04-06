import Image from "next/image"

const Intro = () => {
  return (
    <section className='mx-auto mb-16 flex flex-col items-center gap-6 transition_once'>
      <div className='w-20 h-20 overflow-hidden rounded-full ring-1 ring-neutral-700'>
        <Image src="/Profile.jpg" alt="Profile" width={200} height={200} className="w-full h-full object-cover" />
      </div> 
      <p className='text-center text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg'>
        Hi, I&apos;m <span className='text-white font-medium'>Hor KimHouy</span>. A web developer designing and building
        front-end and back-end solutions. Currently in my senior year at <span className='text-white font-medium'>Royal University of Phnom Penh</span>.
      </p>
    </section>
  )
}

export default Intro