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
      <body className='relative text-black bg-white dark:text-white dark:bg-[#07081f]'>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  )
}
