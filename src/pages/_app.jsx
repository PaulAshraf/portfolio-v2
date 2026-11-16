import { Bricolage_Grotesque, IBM_Plex_Mono } from 'next/font/google'

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

// Variable font: the optical size axis gives text sizes a calmer, more open
// cut than the display sizes, so one family covers headlines and body.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-bricolage',
})

const fontVariables = [plexMono, bricolage]
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
