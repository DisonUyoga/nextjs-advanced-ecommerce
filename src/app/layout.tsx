import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import NavBar from './Navbar/Navbar'
import Footer from './Footer'
import SessionProvider from './SessionProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comfort',
  description: 'we make your wallet lighter',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 3000,
            success: {
              duration: 5000,
            },
          }}
        />
        <SessionProvider>
          <NavBar />
          <main className='max-w-7xl m-auto p-4 min-w-[300px]'>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
