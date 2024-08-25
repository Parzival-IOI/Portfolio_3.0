import ChartContainer from "./ChartContainer"
import { Pdf, Profile } from "./Icon"


const Skill = () => {
  return (
    <div>
      <section className='w-5/6 sm:w-4/6 md:w-3/5 max-w-4xl mx-auto h-auto flex justify-center items-center transition_once gap-4'>
        <a href='Resume.pdf' target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-md text-base md:text-xl bg-cyan-700 flex justify-center items-center gap-4 hover:text-slate-300 hover:bg-cyan-600 transition-colors duration-500'>
          <Pdf/>
          <div className="flex gap-1">
            <div className="hidden lg:block">
              Download
            </div>
            Resume
          </div>
        </a>
        <a href='Profile.jpg' target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-md text-base md:text-xl bg-cyan-700 flex justify-center items-center gap-4 hover:text-slate-300 hover:bg-cyan-600 transition-colors duration-500'>
          <Profile />
          <div className="flex gap-1">
            <div className="hidden lg:block">
              Download
            </div>
            Profile
          </div>
        </a>
        <a href='HorKimHouy_White.jpg' target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-md text-base md:text-xl bg-cyan-700 flex justify-center items-center gap-4 hover:text-slate-300 hover:bg-cyan-600 transition-colors duration-500'>
          <Profile />
          <div className="flex gap-1">
            <div className="hidden lg:block">
              Download
            </div>
            Profile
          </div>
        </a>
      </section>
      <ChartContainer title={'Essential Skill'} lists={e_skill} />
      <ChartContainer title={'Technical Skill'} lists={t_skill} />
      <ChartContainer title={'Languages'} lists={languages} />
    </div>
  )
}

export default Skill




const e_skill = [
  {
    key : 1,
    name : 'Critical Thinking',
    percentage : '85%' 
  },
  {
    key : 2,
    name : 'Problem Solving',
    percentage : '90%' 
  },
  {
    key : 3,
    name : 'Time Management',
    percentage : '85%' 
  },
  {
    key : 4,
    name : 'Teamwork',
    percentage : '80%' 
  },
]

const t_skill = [
  {
    key : 1,
    name : 'C/C++',
    percentage : '95%' 
  },
  {
    key : 2,
    name : 'HTML/CSS/JS',
    percentage : '90%' 
  },
  {
    key : 3,
    name : 'JSX/TSX',
    percentage : '85%' 
  },
  {
    key : 4,
    name : 'PHP',
    percentage : '85%' 
  },
]


const languages = [
  {
    key : 1,
    name : 'Khmer',
    percentage : '100%'
  },
  {
    key : 2,
    name : 'English',
    percentage : '98%'
  },
]