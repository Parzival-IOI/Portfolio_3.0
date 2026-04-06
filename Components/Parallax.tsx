import Image from "next/image"
import sea from '@/public/Sea.png'
import sea_rift from '@/public/SeaF.png'

const Parallax = () => {
  return (
    <section className='relative h-screen overflow-hidden'>
      {/* Background sea layer */}
      <Image src={sea} alt="" fill priority className="object-cover z-0" />
      {/* Welcome text — between sea and rift */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white drop-shadow-lg'>
            Welcome
          </h1>
          <p className='mt-4 text-base text-neutral-300 font-light drop-shadow'>
            To my Portfolio
          </p>
        </div>
      </div>
      {/* Foreground rift layer */}
      <Image src={sea_rift} alt="" fill priority className="object-cover z-20" />
    </section>
  )
}

export default Parallax