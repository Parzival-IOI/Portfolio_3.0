import Image from 'next/image'
import { Pacifico } from 'next/font/google'
import { Pdf, Profile } from '@/Components/Icon'
import ChartContainer from '@/Components/ChartContainer'
import Footer from '@/Components/Footer'

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const page = () => {
  return (
    <div className='min-h-screen'>
      <h1 className={`${font_style.className} w-full pt-24 text-4xl text-center font-bold underline underline-offset-4 transition_once`}>About ME</h1>
      <section className='w-5/6 sm:w-4/6 md:w-3/5 max-w-4xl mx-auto mt-16 mb-8 flex justify-between items-start gap-4 md:gap-8  transition_once'>
        <div className='w-2/5 md:w-1/2 max-w-[8rem] min-w-[5rem] aspect-square overflow-hidden rounded-full'>
          <Image src="/Profile.jpg" alt={`Profile`} width={1000} height={1000}></Image>
        </div>  
        <div className='text-justify md:text-lg lg:text-xl'>
          Hi, My name is&nbsp;
          <strong className='underline underline-offset-4 decoration-2'>
            Hor KimHouy
          </strong>
          . I am a web developer, designing and developing website with creative idea and cool design.
          <br />
          Other than web development, I can also develop application with C/C++ using File or Database.
        </div>
      </section>
      <section className='w-5/6 sm:w-4/6 md:w-3/5 max-w-4xl mx-auto h-auto flex justify-center items-center transition_once gap-4'>
        <a href='Resume.pdf' target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-md text-base md:text-xl bg-cyan-700 flex justify-center items-center gap-4 hover:text-slate-300 hover:bg-cyan-600 transition-colors duration-500'>
          <Pdf/>
          Download Resume
        </a>
        <a href='Profile.jpg' target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-md text-base md:text-xl bg-cyan-700 flex justify-center items-center gap-4 hover:text-slate-300 hover:bg-cyan-600 transition-colors duration-500'>
          <Profile />
          Download Profile
        </a>
      </section>
      <ChartContainer title={'Essential Skill'} lists={e_skill} />
      <ChartContainer title={'Technical Skill'} lists={t_skill} />
      <ChartContainer title={'Languages'} lists={languages} />
      <div className='p-8 md:px-32 md:py-20'>
        <Footer/>
      </div>
    </div>
    )
}
export default page


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