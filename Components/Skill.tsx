import ChartContainer from "./ChartContainer"


const Skill = () => {
  return (
    <div>
      <section className='flex justify-center items-center gap-3 transition_once'>
        <a href='Resume.pdf' target="_blank" rel="noopener noreferrer" className='px-4 py-2 text-sm border border-neutral-700 rounded-md text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors'>
          Resume
        </a>
        <a href='Profile.jpg' target="_blank" rel="noopener noreferrer" className='px-4 py-2 text-sm border border-neutral-700 rounded-md text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors'>
          Profile
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