import Image from "next/image"
import sea from '../app/Sea.png'
import seaF from '../app/SeaF.png'


const Parallax = () => {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
        <Image src={sea} alt="" width={1000} height={1000} className="w-full h-full fixed -z-10 bg-no-repeat" ></Image>
        <Image src={seaF} alt="" width={1000} height={1000} className="w-full h-full " ></Image>
    </section>
  )
}

export default Parallax