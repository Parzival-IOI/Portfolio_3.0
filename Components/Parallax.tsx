import Image from "next/image"
import sea from '@/public/Sea.png'
import sea_rift from '@/public/SeaF.png'


const Parallax = () => {
  return (
    <section className='h-screen md:h-[110vh] lg:h-[120vh] overflow-hidden '>
        <Image src={sea} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen fixed -z-40 bg-no-repeat object-cover bg-center top-0" ></Image>
        <div className=" fixed top-0 -z-30 md:w-[35%] sm:w-[40%] w-[60%] h-screen flex justify-end items-center text-2xl font-bold text-rose-500/80">
          <div className=" bg-gradient-to-tr from-blue-900/70 via-violet-700/70 to-pink-700/50 px-2 py-1 rounded-lg shadow-lg shadow-cyan-700 flex text-center">Welcome!<br />To my Portfolio</div>
        </div>
        <Image src={sea_rift} alt="" width={1000} height={1000} className="md:w-full md:h-auto absolute h-screen object-cover bg-center top-0" ></Image>
    </section>
  )
}

export default Parallax