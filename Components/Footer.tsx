import { FacebookIcon, GithubIcon, YoutubeIcon } from "./Icon"


const Footer = () => {
  return (
    <section className="h-32 bg-[#023017] dark:bg-[#0f1b31]">
        <div className="bg-violet-700 flex justify-center item-center flex-col w-[90%] md:w-[80%] h-[95%] mx-auto my-auto shadow-sm shadow-white rounded-2xl">
            <div className="flex justify-center items-center gap-4 md:gap-8 h-1/2 text-white">
                <a href="https://web.facebook.com/hor.kimhouy.739" target="_blank" rel="noopener noreferrer"><FacebookIcon></FacebookIcon></a>
                <a href="https://github.com/Parzival-IOI"  target="_blank" rel="noopener noreferrer"><GithubIcon></GithubIcon></a>
                <a href="https://www.youtube.com/@parzival-ioi" target="_blank" rel="noopener noreferrer"><YoutubeIcon></YoutubeIcon></a>
                
            </div>
            <div className="text-md md:text-lg text-slate-300 flex justify-center items-center font-bold flex-col">
                <div>&#169; Parzival@2023</div>
                <div><a href="http://www.freepik.com">Background Designed by Freepik</a></div>
            </div>
        </div>
    </section>
  )
}

export default Footer