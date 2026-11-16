import { Bricolage_Grotesque, IBM_Plex_Mono, Inter } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-plex-mono',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bricolage',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

const fontVariables = [plexMono, bricolage, inter]
  .map((font) => font.variable)
  .join(' ')

export default function App({ Component, pageProps }) {
  return (
    <div className={`site ${fontVariables}`}>
      <div className="wrap">
        <Header />
        <main className="page">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
