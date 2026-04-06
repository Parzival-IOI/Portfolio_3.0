import { Phone, FacebookIcon, GithubIcon, Gmail, Telegram, YoutubeIcon } from '@/Components/Icon'
import Contacting from '@/Components/Contacting'

const contact_number = [
  {
    key : 1,
    name : "Phone",
    info : "+855 61234250",
    link : "tel:+85561234250",
    children : <Phone/>
  },
  {
    key : 2,
    name : "Gmail",
    info : "horkimhouy01@gmail.com",
    link : "mailto:horkimhouy01@gmail.com",
    children : <Gmail/>
  },
  {
    key : 3,
    name : "Telegram",
    info : "@Parzival_IOI",
    link : "https://t.me/Parzival_IOI",
    children : <Telegram/>
  },
  {
    key : 4,
    name : "Facebook",
    info : "Parzival",
    link : "https://web.facebook.com/hor.kimhouy.739",
    children : <FacebookIcon/>
  },
  {
    key : 5,
    name : "Github",
    info : "Parzival-IOI",
    link : "https://github.com/Parzival-IOI",
    children : <GithubIcon/>
  },
  {
    key : 6,
    name : "Youtube",
    info : "Parzival",
    link : "https://www.youtube.com/@parzival-ioi",
    children : <YoutubeIcon/>
  },
]

const page = () => {
  return (
    <div className='min-h-screen max-w-2xl mx-auto px-6'>
      <h1 className='pt-24 pb-12 text-2xl font-light tracking-tight text-center'>Contact</h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-3 transition_once'>
        {contact_number.map((item) => {
          return (
            <Contacting items={item} key={item.key} />
          )
        })}
      </section>
    </div>
  )
}

export default page