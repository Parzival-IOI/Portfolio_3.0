import Image from "next/image"
import sea from '../app/Sea.png'
import seaF from '../app/SeaF.png'


const Parallax = () => {
  return (
    <section className='h-[120vh] '>
        <Image src={sea} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen w-auto fixed -z-10 bg-no-repeat object-cover bg-center top-0 " ></Image>
        <Image src={seaF} alt="" width={1000} height={1000} className="md:w-full md:h-auto h-screen w-auto object-cover bg-center" ></Image>
    </section>
  )
}

export default Parallax