import { Pacifico } from 'next/font/google'
import { Phone, FacebookIcon, GithubIcon, Gmail, Telegram, YoutubeIcon } from '@/Components/Icon'
import Contacting from '@/Components/Contacting'

const font_style = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const contact_number = [
  {
    key : 1,
    name : "phone",
    info : "Tel : +855 61234250",
    link : "tel:+85561234250",
    children : <Phone/>
  },
  {
    key : 2,
    name : "Gmail",
    info : "Gmail : horkimhouy01@gmail.com",
    link : "mailto:horkimhouy01@gmail.com",
    children : <Gmail/>
  },
  {
    key : 3,
    name : "Telegram",
    info : "Telegram : @Parzival_IOI",
    link : "https://t.me/Parzival_IOI",
    children : <Telegram/>
  },
  {
    key : 4,
    name : "Facebook",
    info : "Facebook : Parzival",
    link : "https://web.facebook.com/hor.kimhouy.739",
    children : <FacebookIcon/>
  },
  {
    key : 5,
    name : "Github",
    info : "Github : Parzival-IOI",
    link : "https://github.com/Parzival-IOI",
    children : <GithubIcon/>
  },
  {
    key : 6,
    name : "Youtube",
    info : "Channel : Parzival",
    link : "https://www.youtube.com/@parzival-ioi",
    children : <YoutubeIcon/>
  },
]

const page = () => {
  return (
    <div className='min-h-screen'>
      <h1 className={`${font_style.className} w-full pt-24 text-4xl text-center font-bold underline underline-offset-4 transition_once`}>Contact</h1>
      <section className='w-[85%] md:w-4/5 mx-auto my-8 transition_once grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-8'>
        {contact_number.map((item) => {
          return (
            <Contacting items={item} />
          )
        })}
      </section>
    </div>
  )
}

export default page