import './globals.css'
import Navbar from '../Components/Navbar'

export const metadata = {
  title: {
    default : 'Parzival',
    template : '%s | Parzival',
  },
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative text-black dark:text-white bg-[#023017] dark:bg-[#0f1b31]'>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  )
}
