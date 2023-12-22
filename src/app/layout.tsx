import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comfort',
  description: 'we make your wallet lighter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='max-w-7xl m-auto p-4 min-w-[300px]'>{children}</main>
      </body>
    </html>
  )
}
