
const Intro = () => {
  return (
    <section className="bg-[#023017] dark:bg-[#0f1b31] w-full p-12 md:p-24 ">
      <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 text-justify">Introduction</h4>
      <p className="text-md md:text-lg text-white indent-8 mt-4">My Name is <strong className="text-fuchsia-700 hover:underline transition-all ">Parzival</strong> (<strong className="text-rose-300"> Alias </strong>). I studied at RUPP (<strong className="text-rose-600"> ROYAL UNIVERSITY OF PHNOMPENH </strong>) as a second year student. I like working in Web Development and when I'm free, I like to write code.</p>

      <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 text-justify mt-12">Programming Languages</h4>
      <ul className="list-disc pl-8 mt-4 text-md md:text-lg text-white">
        <li>C/C++ (<strong className="dark:text-slate-500 text-rose-400"> Basic && Advanced </strong>)</li>
        <li>HTML/CSS</li>
        <li>Javascript</li>
        <li>PHP (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
        <li>React JS (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
        <li>Next13 JS (<strong className="dark:text-slate-500 text-rose-400"> Basic </strong>)</li>
        <li>Arduino (<strong className="dark:text-slate-500 text-rose-400"> C++ for Robotic </strong>)</li>
      </ul>

      <h4 className="text-2xl md:text-3xl font-bold underline decoration-2 text-amber-500 text-justify mt-12">Graduated</h4>
      <ul className="list-disc pl-8 mt-4 text-md md:text-lg text-white">
        <li>RUPP (<strong className="dark:text-slate-500 text-rose-400"> C/C++  Arduino   </strong>)</li>
        <li>ETEC Center (<strong className="dark:text-slate-500 text-rose-400"> HTML/CSS  Javascript  PHP   </strong>)</li>
        <li>Self Study (<strong className="dark:text-slate-500 text-rose-400"> HTML/CSS Javaccript PHP React NextJS  </strong>)</li>
      </ul>


    </section>

  )
}

export default Intro