import {Pacifico} from 'next/font/google'

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const page = () => {
  return (
    <div className=''>
      <h1 className={`${font_style.className} w-full pt-24 text-4xl text-center font-bold underline underline-offset-4`}>Contact</h1>
    </div>
  )
}

export default page