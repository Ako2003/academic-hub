import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar'
import BottomBar from '@/components/BottomBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Root Page',
  description: 'Root Page',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='max-sm:hidden fixed w-16'>
            <SideBar />
          </div>
          <div className='sm:ml-20'>
            {children}
          </div>
          <div className='sm:hidden'>
            <BottomBar />
          </div>
          <div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
