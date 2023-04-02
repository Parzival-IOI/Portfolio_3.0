
const Intro = () => {
  return (
    <section className="bg-[#023017] dark:bg-[#0f1b31] w-full p-8 md:p-20 ">
      
      <div className="mb-16">
        <div className="p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90%">
          <div className="bg-[#023017] dark:bg-[#0f1b31] rounded-lg p-4">
            <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 text-justify">Introduction</h4>

            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mt-2 md:mt-6"></div>

            <p className="text-md md:text-lg text-white indent-8 my-4 md:my-8 mx-0 md:mx-2">My Name is <strong className="text-fuchsia-700 hover:underline transition-all ">Parzival</strong> (<strong className="text-rose-300"> Alias </strong>). I studied at RUPP (<strong className="text-rose-600"> ROYAL UNIVERSITY OF PHNOMPENH </strong>) as a second year student. I like working in Web Development and when I'm free, I like to write code.</p>
          </div>
        </div>
      </div>
      
      <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl m-0"></div>

      <div className="my-16">
        <div className="p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <div className="bg-[#023017] dark:bg-[#0f1b31] rounded-lg p-4">
            <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 text-justify">Programming Languages</h4>

            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mt-2 md:mt-6"></div>
            
            <ul className="list-disc pl-8 mt-4 text-md md:text-lg text-white">
              <li>C/C++ (<strong className="dark:text-slate-500 text-rose-400"> Basic && Advanced </strong>)</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>PHP (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
              <li>React JS (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
              <li>Next13 JS (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
              <li>Arduino (<strong className="dark:text-slate-500 text-rose-400"> C++ for Robotic </strong>)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl m-0"></div>

      <div className="mb-8 mt-4">
        <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 text-justify">Studied</h4>
        <ul className="list-disc pl-8 mt-4 text-md md:text-lg text-white">
          <li>RUPP (<strong className="dark:text-slate-500 text-rose-400"> C/C++  Arduino   </strong>)</li>
          <li>ETEC Center (<strong className="dark:text-slate-500 text-rose-400"> HTML/CSS  Javascript  PHP   </strong>)</li>
          <li>Self Study (<strong className="dark:text-slate-500 text-rose-400"> HTML/CSS Javaccript PHP React NextJS  </strong>)</li>
        </ul>
      </div>


    </section>

  )
}

export default Intro