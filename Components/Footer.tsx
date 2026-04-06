import { FacebookIcon, GithubIcon, YoutubeIcon } from "./Icon"

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-800/50 py-12">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 text-neutral-500">
          <a className="hover:text-white transition-colors" href="https://web.facebook.com/hor.kimhouy.739" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
          <a className="hover:text-white transition-colors" href="https://github.com/Parzival-IOI" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
          <a className="hover:text-white transition-colors" href="https://www.youtube.com/@parzival-ioi" target="_blank" rel="noopener noreferrer"><YoutubeIcon /></a>
        </div>
        <div className="text-xs text-neutral-600">
          &#169; Parzival {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer