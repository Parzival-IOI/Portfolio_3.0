import Image from "next/image"
import BoldU from "./BoldU"


const Intro = () => {
  return (
    <section className='mx-auto my-8 lg:px-24 flex justify-between items-start gap-4 md:gap-8  transition_once'>
        <div className='w-2/5 md:w-1/2 max-w-[8rem] min-w-[5rem] aspect-square overflow-hidden rounded-full my-auto'>
          <Image src="/Profile.jpg" alt={`Profile`} width={1000} height={1000}></Image>
        </div> 
        <div className='text-justify md:text-lg lg:text-xl my-auto lg:px-24 indent-1'>
          Hi, My name is
          &nbsp;
          <BoldU>Hor KimHouy</BoldU>
          . I am a web developer, designing and developing website for both Front-end and Back-end.
          I have years of experience from different companys around combodia. Currently I am in my senior year at
          &nbsp;
          <BoldU>Royal University of PhnomPenh.</BoldU>
        </div>
      </section>
  )
}

export default Intro