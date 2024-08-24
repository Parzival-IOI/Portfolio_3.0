import { FacebookIcon, GithubIcon, YoutubeIcon } from "./Icon"

const Footer = () => {
  return (
      <section className="bg-slate-900 flex justify-center item-center flex-col h-56 mx-auto my-auto">
          <div className="flex justify-center items-center gap-4 md:gap-8 h-1/2 text-white">
              <a className="hover:text-slate-200 transition-color duration-100" href="https://web.facebook.com/hor.kimhouy.739" target="_blank" rel="noopener noreferrer"><FacebookIcon></FacebookIcon></a>
              <a className="hover:text-slate-200 transition-color duration-100" href="https://github.com/Parzival-IOI"  target="_blank" rel="noopener noreferrer"><GithubIcon></GithubIcon></a>
              <a className="hover:text-slate-200 transition-color duration-100" href="https://www.youtube.com/@parzival-ioi" target="_blank" rel="noopener noreferrer"><YoutubeIcon></YoutubeIcon></a>
          </div>
          <div className="text-md md:text-lg text-slate-300 flex justify-center items-center font-bold gap-4">
              <div>&#169; Parzival@{new Date().getFullYear()}</div>
              <div><a className="hover:text-white transition-color duration-100" href="http://www.freepik.com">Background Designed by Freepik</a></div>
          </div>
      </section>
  )
}

export default Footer