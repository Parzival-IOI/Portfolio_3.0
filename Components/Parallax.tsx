import Image from "next/image"
import sea from '../app/Sea.png'
import seaF from '../app/SeaF.png'
import forest from '../app/Forest.png'
import forestF from '../app/ForestF.png'


const Parallax = () => {
  return (
    <section className='h-screen md:h-[110vh] lg:h-[120vh] overflow-hidden '>
        <Image src={sea} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen fixed -z-10 bg-no-repeat object-cover bg-center top-0 hidden dark:block" ></Image>
        <Image src={seaF} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen object-cover bg-center top-0 hidden dark:block" ></Image>
        <Image src={forest} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen fixed -z-10 bg-no-repeat object-cover bg-center top-0 dark:hidden block" ></Image>
        <Image src={forestF} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen object-cover bg-center top-0  dark:hidden block" ></Image>
    </section>
  )
}

export default Parallax