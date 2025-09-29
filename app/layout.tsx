import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Zaddy - Futuristic Agency | Web, App & AI Solutions',
  description: 'Zaddy is a futuristic agency delivering automation, ML, and digital solutions. We build web, app & AI solutions that automate the future.',
  keywords: 'web development, app development, AI automation, ML solutions, futuristic agency',
  authors: [{ name: 'Zaddy Agency' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}