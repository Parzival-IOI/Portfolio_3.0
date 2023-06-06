import Image from "next/image"
import sea from '../app/Sea.png'
import seaF from '../app/SeaF.png'
import forest from '../app/Forest.png'
import forestF from '../app/ForestF.png'


const Parallax = () => {
  return (
    <section className='h-screen md:h-[110vh] lg:h-[120vh] overflow-hidden '>
        <Image src={sea} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen fixed -z-40 bg-no-repeat object-cover bg-center top-0 hidden dark:block" ></Image>
        <div className="animate-bounce fixed top-0 -z-30 md:w-[35%] sm:w-[40%] w-[60%] h-screen dark:flex justify-end items-center text-2xl font-bold text-rose-500/80 hidden">
          <div className=" bg-gradient-to-tr from-blue-900/70 via-violet-700/70 to-pink-700/50 px-2 py-1 rounded-lg shadow-lg shadow-cyan-700 flex text-center">Why Don't You <br /> Try Light-Mode ?</div>
        </div>
        <Image src={seaF} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen object-cover bg-center top-0 hidden dark:block" ></Image>
        <Image src={forest} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen fixed -z-20 bg-no-repeat object-cover bg-center top-0 dark:hidden block" ></Image>
        <div className="animate-pulse duration-1000 fixed top-0 -z-10 lg:w-[30%] md:w-[40%] sm:w-[50%] w-[80%] h-screen flex justify-end items-center text-xl font-bold text-amber-400 dark:hidden">
          <div className="bg-orange-600/30 px-2 py-1 rounded-lg shadow-lg shadow-amber-600 flex text-center">Suggesting Dark-Mode,<br />Kinda Bright Don't You Think ?</div>
        </div>
        <Image src={forestF} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen object-cover bg-center top-0  dark:hidden block" ></Image>
    </section>
  )
}

export default Parallax