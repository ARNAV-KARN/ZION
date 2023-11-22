import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const Playfair = Playfair_Display({
  weight:'500', 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Zion',
  description: 'NMIMS CIS intercollegiate fest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Playfair.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
