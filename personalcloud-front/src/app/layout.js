import { Inter } from 'next/font/google'
import Head from "next/head";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PersonalCloud',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
