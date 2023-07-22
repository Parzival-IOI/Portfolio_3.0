import BoxList from "@/Components/BoxLists"
import { Asterisk } from "@/Components/Icon"

const Intro = () => {
  return (
    <section className='bg-[#023017] dark:bg-[#0f1b31] w-full p-8 md:py-20 md:px-32'>
      <div className="flex justify-center items-center my-16 md:my-24">
        <p className={`text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 `}>Hi and Welcome to My Portfolio</p>
      </div>
      <BoxList>
        <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 flex gap-4 items-center">
          <Asterisk/>
          Introduction
        </h4>
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 rounded-2xl mt-2 md:mt-6"></div>
        <p className="text-md md:text-lg text-white indent-8 my-6 md:my-8 mx-0 md:mx-2">My Name is <strong className="text-fuchsia-700 hover:underline transition-all ">Parzival</strong> (<strong className="text-rose-300"> Alias </strong>). I studied at RUPP (<strong className="text-rose-600"> ROYAL UNIVERSITY OF PHNOMPENH </strong>) as a second year student. I like working in Web Development and when I'm free, I like to <span className="underline decoration-2 underline-offset-4">experiment</span> and <span className="underline decoration-2 underline-offset-4">develop new project</span>.</p>
      </BoxList>
      <BoxList>
        <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 flex gap-4 items-center">
          <Asterisk/>
          Programming Languages
        </h4>
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 rounded-2xl mt-2 md:mt-6"></div>
        <ul className={`font-bold list-disc pl-8 my-6 md:my-8 mx-0 md:mx-2 text-md md:text-lg text-white`}>
          <li>C/C++ (<strong className="dark:text-slate-500 text-rose-400"> Basic && Advanced </strong>)</li>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>PHP (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
          <li>React JS (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
          <li>Next JS (<strong className="dark:text-slate-500 text-rose-400"> Advanced </strong>)</li>
          <li>MySQL / SQL SERVER </li>
          <li>Arduino (<strong className="dark:text-slate-500 text-rose-400"> C++ for Robotic </strong>)</li>
          <li>Micropython (<strong className="dark:text-slate-500 text-rose-400"> Smart-Home </strong>)</li>
        </ul>
      </BoxList>
      <BoxList>
        <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 flex gap-4 items-center">
          <Asterisk/>
          Studied
        </h4>

        <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 rounded-2xl mt-2 md:mt-6"></div>

        <ul className="font-bold list-disc pl-8 my-6 md:my-8 mx-0 md:mx-2 text-md md:text-lg text-white">
          <li>RUPP (<strong className="dark:text-slate-500 text-rose-400"> C/C++  Arduino   </strong>)</li>
          <li>ETEC Center (<strong className="dark:text-slate-500 text-rose-400"> HTML/CSS  Javascript  PHP   </strong>)</li>
          <li>Self Study (<strong className="dark:text-slate-500 text-rose-400"> HTML/CSS Javaccript PHP React NextJS  </strong>)</li>
        </ul>
      </BoxList>
    </section>

  )
}

export default Intro