import './globals.css'
import Navbar from '@/Components/Navbar'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollUp from '@/Components/ScrollUp'
import Footer from '@/Components/Footer'

const inter = Inter({
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
      <body className={`${inter.className} relative`}>
        <Navbar/>
        <main>{children}</main>
        <ScrollUp/>
        <Footer />
      </body>
    </html>
  )
}
