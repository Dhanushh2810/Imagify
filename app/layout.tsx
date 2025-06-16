
import { dark  } from '@clerk/themes'
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider    appearance={{
      baseTheme: dark
    }}>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased bg-purple-gradient bg-white  text-white ">
          {/* Entire page is flex-col layout */}
          <div className='w-full h-full bg-zinc-900 '>
          <div className="flex flex-col h-screen">
            
            {/* Fixed Header */}
            <div className="shrink-0">
              <Header />
            </div>

            {/* Main content fills remaining height */}
           {children}
          </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
