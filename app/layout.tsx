import './globals.css'
import Navbar from '@/Components/Navbar'
import { Metadata } from 'next'
import { Signika } from 'next/font/google'
import ScrollUp from '@/Components/ScrollUp'

const signika = Signika({
  subsets : ['latin'],
  display : 'swap',
})

export const metadata : Metadata = {
  title: {
    default : "Parzival",
    template : "%s | Parzival",
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
      <body className={`${signika.className} relative text-white bg-[#023017] dark:bg-[#0f1b31]`}>
        <Navbar/>
        <main>{children}</main>
        <ScrollUp/>
      </body>
    </html>
  )
}
